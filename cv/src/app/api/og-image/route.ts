import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

// Helper function to make URL absolute
function makeAbsoluteUrl(baseUrl: string, relativeUrl?: string): string | null {
  if (!relativeUrl) return null;
  try {
    return new URL(relativeUrl, baseUrl).toString();
  } catch (error) {
    // Handle cases where relativeUrl might be invalid (e.g., data: URI)
    if (relativeUrl.startsWith("http")) return relativeUrl;
    return null;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", // Pretend to be Googlebot
        Accept: "text/html",
      },
      signal: AbortSignal.timeout(8000), // 8 seconds timeout
      next: { revalidate: 60 * 60 * 24 }, // Revalidate data once per day
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.statusText}`);
      return NextResponse.json(
        { title: null, description: null, image: null, favicon: null, url },
        {
          headers: {
            "Cache-Control":
              "public, s-maxage=3600, stale-while-revalidate=86400",
          }, // Cache errors for 1 hour
        },
      );
    }

    // Ensure content type is HTML before parsing
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("text/html")) {
      console.error(`Non-HTML content type for ${url}: ${contentType}`);
      return NextResponse.json(
        { title: null, description: null, image: null, favicon: null, url },
        {
          headers: {
            "Cache-Control":
              "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        },
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extract metadata
    const title =
      $('meta[property="og:title"]').attr("content") ||
      $("title").text() ||
      $('meta[name="title"]').attr("content");
    const description =
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content");
    const ogImage = makeAbsoluteUrl(
      url,
      $('meta[property="og:image"]').attr("content"),
    );

    // Find favicon (prefer larger sizes or SVG)
    let favicon =
      makeAbsoluteUrl(
        url,
        $('link[rel="icon"][type="image/svg+xml"]').attr("href"),
      ) ||
      makeAbsoluteUrl(url, $('link[rel="apple-touch-icon"]').attr("href")) ||
      makeAbsoluteUrl(url, $('link[rel="icon"][sizes*="1"]').attr("href")) || // Larger icons
      makeAbsoluteUrl(url, $('link[rel="shortcut icon"]').attr("href")) ||
      makeAbsoluteUrl(url, $('link[rel="icon"]').attr("href"));

    // Default favicon if none found
    if (!favicon) {
      favicon = makeAbsoluteUrl(url, "/favicon.ico");
    }

    const metadata = {
      title: title?.trim() || null,
      description: description?.trim() || null,
      image: ogImage,
      favicon: favicon,
      url: url, // Include the original URL
    };

    return NextResponse.json(metadata, {
      headers: {
        // Cache successful responses: CDN cache for 1 day, allow stale for 7 days
        "Cache-Control":
          "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error: any) {
    console.error(`Error processing ${url}:`, error.message);
    return NextResponse.json(
      { title: null, description: null, image: null, favicon: null, url },
      {
        status: error.name === "TimeoutError" ? 504 : 500, // Gateway Timeout for timeouts
        headers: {
          "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600",
        }, // Cache errors for 10 mins
      },
    );
  }
}
