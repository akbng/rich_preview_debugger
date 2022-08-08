const puppeteer = require("puppeteer");

export default async function handler(req, res) {
  const { q: url } = req.query;
  try {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto(url);
      const meta = await page.evaluate(() => {
        const ogMetas = {};
        Array.from(document.getElementsByTagName("meta")).forEach((meta) => {
          const metaProp = meta.getAttribute("property");
          if (!!metaProp) {
            ogMetas[metaProp] = meta.getAttribute("content");
          }
        });
        return ogMetas;
      });
      res.status(200).json({
        error: false,
        msg: Object.keys(meta).length
          ? "Successfully fetched meta data"
          : "No meta data found",
        data: meta,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: true, msg: "Error fetching meta data" });
    } finally {
      await browser.close();
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: true, msg: "Something went wrong on our side!😟" });
  }
}
