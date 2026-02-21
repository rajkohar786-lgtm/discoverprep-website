import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://discoverprep.ca";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-02-21"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
