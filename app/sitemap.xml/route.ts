import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://www.mygreed.shop/</loc>
    <lastmod>2023-10-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Blog Pages -->
  <url>
    <loc>https://www.mygreed.shop/blog</loc>
    <lastmod>2023-10-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.mygreed.shop/blog/[id]</loc>
    <lastmod>2023-10-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- About Page -->
  <url>
    <loc>https://www.mygreed.shop/about</loc>
    <lastmod>2023-09-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Login and Signup Pages -->
  <url>
    <loc>https://www.mygreed.shop/login</loc>
    <lastmod>2023-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.mygreed.shop/signup</loc>
    <lastmod>2023-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- Profile Page -->
  <url>
    <loc>https://www.mygreed.shop/profile</loc>
    <lastmod>2023-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Add Blog Post Page -->
  <url>
    <loc>https://www.mygreed.shop/addblogpost</loc>
    <lastmod>2023-09-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Search Page -->
  <url>
    <loc>https://www.mygreed.shop/search</loc>
    <lastmod>2023-09-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}