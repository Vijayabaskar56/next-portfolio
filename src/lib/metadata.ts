import { Metadata } from "next";

export type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string;
  localPath?: string;
};

export function basicMetadata(metadata?: MetadataProps): Metadata {
  const title = "Vijayabaskar56 | portfolio";
  const description = "Personal Portfolio of Vijayabaskar";

  return {
    metadataBase: new URL("https://www.vijayabaskar.xyz/"),
    title: metadata?.title || title,
    description: metadata?.description || description,
    authors: [
      {
        name: "Vijayabaskar",
        url: "https://www.vijayabaskar.xyz/",
      },
      {
        name: "Vijayabaskar56",
        url: "https://www.vijayabaskar.xyz/",
      },
    ],
    publisher: "Vijayabaskar",
    robots: {
      index: true,
      follow: true,
    },
    keywords: metadata?.keywords
      ? metadata?.keywords
      : "developer, react, software,",
    creator: "Vijayabaskar",
    applicationName: "Vijayabaskar56",
    verification: {
      google: "_ddpkTEVUeriKy5wfzSxCqdnfIAnITDkiwRdxP9qWEo",
    },
    openGraph: {
      title: metadata?.title || title,
      images: ["https://www.vijayabaskar.xyz/logo.png"],
      description: metadata?.description || description,
      url: `https://www.vijayabaskar.xyz/${metadata?.localPath || ""}`,
      type: "website",
      siteName: "Vijayabaskar56",
    },
    twitter: {
      site: `https://www.vijayabaskar.xyz/${metadata?.localPath || ""}`,
      card: "summary_large_image",
      title: metadata?.title || title,
      images: ["https://www.vijayabaskar.xyz/logo.png"],
      description: metadata?.description || description,
    },
    thread: {
      title: metadata?.title || title,
      description: metadata?.description || description,
      image: "https://www.vijayabaskar.xyz/logo.png",
    },
    facebook: {
      title: metadata?.title || title,
      description: metadata?.description || description,
      url: `https://www.vijayabaskar.xyz/${metadata?.localPath || ""}`,
      type: "website",
      siteName: "Vijayabaskar56",
    },
  } as Metadata;
}
