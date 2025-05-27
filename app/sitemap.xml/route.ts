import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.kidscity.uz";

  const staticPages = ["", "/catalogue", "/cart", "/products/[id]", "/profile", "/auth/signin"];

  const urls = staticPages
    .map((page) => {
      return `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
