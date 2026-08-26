import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
  ];
  return routes.map((r) => ({
    url: `${SITE.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
