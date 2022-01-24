const fs = require("fs");
const mongoose = require("mongoose");
const Page = require("../pages/api/models/Page");

let sitemapSchema = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ||REPLACE||
</urlset>`;

const generateSitemap = async () => {
  await mongoose.connect(mongodburl);
  const Pages = await Page.find();
  let yourDate = new Date();
  yourDate = yourDate.toISOString().split("T")[0];
  let urls = "";
  for (let post of Pages) {
    urls += `<url><loc>https://answerly.site/${post.lang}/${post.slug}</loc><lastmod>${yourDate}</lastmod></url>`;
  }
  let tempSitemap = sitemapSchema.replace("||REPLACE||", urls);
  fs.writeFile("../public/Sitemap.xml", tempSitemap, null, (err) => {
    if (err) console.log(err);
    console.log("Done");
  });
};

generateSitemap();
