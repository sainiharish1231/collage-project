export async function GET() {
  const adsTxtContent = `
 google.com, pub-6532650680025889, DIRECT, f08c47fec0942fa0
  `.trim();

  return new Response(adsTxtContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24h
    },
  });
}