'strict'

const puppeteer = require('puppeteer');

var url = process.argv[2];

const timestamp = Date.now();
const date = new Date(timestamp);
const dvalues = [
   date.getFullYear(),
   date.getMonth()+1,
   date.getDate(),
   date.getHours(),
   date.getMinutes(),
   date.getSeconds(),
];
const filename = dvalues[0] + '-' + 
                  dvalues[1] + '-' +
                  dvalues[2] + '-' +
                  dvalues[3] + '-' +
                  dvalues[4] + '-' + 
                  dvalues[5] + '.png';

console.log(filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1920, height: 1080});
  await page.goto(url);
//   await page.goto('https://example.com');
  // await page.screenshot({path: 'example.png', fullPage: true});
  await page.screenshot({path: filename, fullPage: true});
  await browser.close();
})();