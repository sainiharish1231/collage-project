export async function GET() {
  const adsTxtContent = `
google.com, pub-5983875241543751, DIRECT, f08c47fec0942fa0
example-ssp.com, 12345, DIRECT, 67890
example-exchange.com, ABCDEF, RESELLER
another-ssp.com, 98765, DIRECT, 12345
  `.trim();

  return new Response(adsTxtContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24h
    },
  });
}