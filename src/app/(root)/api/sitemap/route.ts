import { fetchHomes } from "@/lib/homes.db";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const homes = await fetchHomes();

  // Generate URLs for each home-details/[homeId]
  const homeDetailsUrls = homes.map((home) => {
    return `<url>
      <loc>${baseUrl}/home-details/${home.id}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
  });

  // Add static pages (e.g., LandingPage)
  const staticUrls = [
    `<url>
      <loc>${baseUrl}/</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>`,
  ];

   // Combine all URLs
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.join("\n")}
  ${homeDetailsUrls.join("\n")}
</urlset>`;

   // Trim to avoid invisible whitespace
  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
