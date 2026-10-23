import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { RESUME_DATA } from "@/data/resume-data";

export const alt = `${RESUME_DATA.name} | ${RESUME_DATA.about}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const avatar = await readFile(
    path.join(process.cwd(), "public", RESUME_DATA.avatarUrl),
  );
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          color: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
              {RESUME_DATA.name}
            </div>
            <div
              style={{
                fontSize: 34,
                color: "#525252",
                maxWidth: 760,
                lineHeight: 1.3,
              }}
            >
              Research Engineer at Hugging Face. Scaling RL environments in the
              open.
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            width={220}
            height={220}
            alt=""
            style={{ borderRadius: 28, objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#737373",
            borderTop: "2px solid #e5e5e5",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 28 }}>
            <span>FineEnvs</span>
            <span>Repo2RLEnv</span>
            <span>Nayana</span>
            <span>CognitiveLab</span>
          </div>
          <span style={{ color: "#0a0a0a", fontWeight: 600 }}>
            adithyask.com
          </span>
        </div>
      </div>
    ),
    size,
  );
}
