import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      priority: 1,
      url: "https://lukehendriks.net",
    },
  ];
}
