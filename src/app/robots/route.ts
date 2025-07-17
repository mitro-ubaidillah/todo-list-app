
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function GET(): Response {
  const robotsTxt = `
    User-agent:*
    Allow:/
    Sitemap:${SITE_URL}/sitemap.xml
  `;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}