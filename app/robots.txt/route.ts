import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(`User-agent: *
Allow: /
Sitemap: https://www.kidscity.uz/sitemap.xml`);
}
