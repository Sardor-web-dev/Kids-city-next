// app/robots.txt/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const body = `User-agent: *
Disallow: /admin
Allow: /favicon.ico
Sitemap: https://www.kidscity.uz/sitemap.xml`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
