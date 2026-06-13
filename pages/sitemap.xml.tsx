import Axios from "axios";
import { GetServerSideProps } from "next";
// import { BASE_URL, HOSTNAME } from "../services/environments"

const Sitemap = () => {};
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const HOSTNAME = "https://api.karyayudi.my.id/api";
  const BASE_URL = "https://karyayudi.my.id";
  const article = (await Axios.get(HOSTNAME + "/karyayudi/blog")).data.data.map(
    (a) => BASE_URL + "/blog/" + a.slug,
  );
  const project = (
    await Axios.get(HOSTNAME + "/karyayudi/project")
  ).data.data.map((a) => BASE_URL + "/project/" + a.slug);
  const restoration = [];

  if (res) {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
    res.setHeader("Content-Type", "text/xml");
    res.write(
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>${BASE_URL}</loc>
<changefreq>daily</changefreq>
<priority>1.0</priority>
<lastmod>2021-11-03T03:16:20.318Z</lastmod>
</url>
${article
  .map(
    (url) => `<url>
<loc>${url}</loc>
<changefreq>daily</changefreq>
<priority>0.9</priority>
<lastmod>${new Date().toISOString()}</lastmod>
</url>`,
  )
  .join("")}
${project
  .map(
    (url) => `<url>
<loc>${url}</loc>
<changefreq>daily</changefreq>
<priority>0.9</priority>
<lastmod>${new Date().toISOString()}</lastmod>
</url>`,
  )
  .join("")}

<url>
<loc>${BASE_URL}/project</loc>
<changefreq>daily</changefreq>
<priority>0.7</priority>
<lastmod>2021-11-03T03:16:20.319Z</lastmod>
</url>
<url>
<loc>${BASE_URL}/project/games</loc>
<changefreq>daily</changefreq>
<priority>0.7</priority>
<lastmod>2021-11-03T03:16:20.319Z</lastmod>
</url>
<url>
<loc>${BASE_URL}/project/game/floppy-bird</loc>
<changefreq>daily</changefreq>
<priority>0.7</priority>
<lastmod>2021-11-03T03:16:20.319Z</lastmod>
</url>
</urlset>`.trim(),
    );
    res.end();
  }
  return {
    props: {},
  };
};
export default Sitemap;
