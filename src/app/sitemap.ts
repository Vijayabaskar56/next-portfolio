import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    {
      url: "https://www.vijayabaskar.xyz/",
      lastModified: new Date(),
      priority: 1,
    },
  ];

  return routes;
}
