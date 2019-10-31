const puppeteer = require("puppeteer");
const cron = require("cron");
const mongoose = require("mongoose");

const { DOMCoordinates } = require("./constants/mark");

(async () => {
  puppeteer.defaultArgs({
    devtools: true
  });
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });
  const page = await browser.newPage();
  await page.goto("http://data.stats.gov.cn/easyquery.htm?cn=A01", {
    waitUntil: "domcontentloaded"
  });

  const navList = await page.$eval(
    DOMCoordinates.easyquery.navList.value,
    el => {
      const nodes = el;

      console.log(nodes);
    }
  );

  //   await browser.close();
})();
