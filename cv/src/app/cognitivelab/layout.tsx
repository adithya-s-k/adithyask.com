import type { Metadata } from "next";

const description =
  "CognitiveLab is an open-source AI research lab founded by Adithya S Kolavi, behind Ambari-7B, India's first Kannada-English bilingual LLM, and Nayana, a 22-language vision-language model backed by Meta's LLaMA Impact Grant.";

export const metadata: Metadata = {
  title: "CognitiveLab",
  description,
  alternates: { canonical: "/cognitivelab" },
  openGraph: {
    title: "CognitiveLab | Adithya S Kolavi",
    description,
    url: "/cognitivelab",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "CognitiveLab | Adithya S Kolavi",
    description,
    images: ["/opengraph-image"],
  },
};

export default function CognitiveLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
