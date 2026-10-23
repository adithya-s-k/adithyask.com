import type { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { getRepositories } from "@/lib/github";
import { HomePage } from "@/components/home-page";

export const revalidate = 21600; // 6 hours: keeps GitHub star counts fresh

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const siteUrl = RESUME_DATA.personalWebsiteUrl;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: RESUME_DATA.name,
      alternateName: ["Adithya Kolavi", "Adithya S K"],
      url: siteUrl,
      image: `${siteUrl}${RESUME_DATA.avatarUrl}`,
      email: `mailto:${RESUME_DATA.contact.email}`,
      jobTitle: "Research Engineer",
      description: RESUME_DATA.summary,
      worksFor: [
        {
          "@type": "Organization",
          name: "Hugging Face",
          url: "https://huggingface.co",
        },
        {
          "@type": "Organization",
          name: "CognitiveLab",
          url: "https://www.cognitivelab.in",
        },
      ],
      alumniOf: RESUME_DATA.education.map((education) => ({
        "@type": "CollegeOrUniversity",
        name: education.school,
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Reinforcement Learning",
        "RL Environments",
        "Post-training",
        "Large Language Models",
        "Vision-Language Models",
        "Multilingual AI",
        "Document AI",
        "Open Source Software",
      ],
      sameAs: [
        ...RESUME_DATA.contact.social.map((social) => social.url),
        "https://huggingface.co/AdithyaSK",
        "https://adithyask.medium.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: RESUME_DATA.name,
      description: RESUME_DATA.about,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      mainEntity: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

export default async function Page() {
  const repositories = await getRepositories(RESUME_DATA.open_source);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage initialRepos={repositories} />
    </>
  );
}
