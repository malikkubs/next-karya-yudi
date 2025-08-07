import APINew from "../utils/Api";

const Sitemap = () => {
  // The component itself doesn't render anything
  return null;
};

export default Sitemap;

export async function getServerSideProps({ res }) {
  const BASE_URL = "https://karyayudi.my.id";

  const response = await APINew.get("/gassa-ky/tutorial", {});
  const pages = response?.data?.list_artikel || [];

  // Fetch your site's URLs; this could be from an API, database, etc.

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}</loc>
      <priority>1.0</priority>
    </url>
    ${pages
      ?.map(({ slug, created_at }) => {
        return `
          <url>
            <loc>${BASE_URL}/blog/${slug}</loc>
            <lastmod>${created_at}</lastmod>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

async function handler({ res }) {
  // const pages = await getAllPages();

  const baseUrl = "https://karyayudi.my.id";
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <priority>1.0</priority>
    </url>
  </urlset>`;
  if (res) {
    res.setHeader("Content-Type", "application/xml");
    res.write(sitemap);
    res.status(200).send(sitemap);
  }
  return {
    props: {},
  };
}
async function getAllPages() {
  try {
    const response = await APINew.get("/gassa-ky/tutorial", {});
    const pages = response?.data?.list_artikel || [];

    // Proses data halaman sesuai kebutuhan Anda
    // Misalnya, ekstrak rute dari data halaman
    // const routes = pages.map((page) => page);
    return {
      props: { pages },
    };
  } catch (error) {
    console.error("Error fetching pages:", error);
    return {
      props: { pages: [] },
    };
  }
}
