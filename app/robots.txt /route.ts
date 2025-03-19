// app/robots.txt/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `
# robots.txt file for https://www.mygreed.shop
User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/
Disallow: /admin/

Sitemap: https://www.mygreed.shop/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}