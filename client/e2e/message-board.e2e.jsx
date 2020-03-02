import "jest";
import pptr from "puppeteer";

let page;
let browser;
const pptrConfig = {
  headless: true,
  // slowMo: 200,
  // devtools: true,
  // defaultViewport: {
  //     width: 1200,
  //     height: 768
  // },
  args: ["--no-sandbox"]
};
const caseTimeout = 40000;

describe("Message Board", function() {
  beforeAll(async () => {
    browser = await pptr.launch(pptrConfig);
    page = await browser.newPage();
  });

  test(
    "Should render title correctly",
    async () => {
      await page.goto("http://127.0.0.1:1025", { waitUntil: "networkidle0" });
      await page.waitFor(1000);

      const title = await page.$eval("#T_Title", txt => txt.textContent);
      expect(title).toBe("A simple message board");
    },
    caseTimeout
  );

  test(
    "Should submit message correctly",
    async () => {
      await page.goto("http://127.0.0.1:1025", { waitUntil: "networkidle0" });
      await page.waitFor(1000);

      // Mock input and submit
      await page.type("#T_Name", "Test Name");
      await page.type("#T_Message", "Test Message");
      await page.click("#T_SubmitBtn");
      await page.waitFor(1000);

      const comments = page.$$(".comment .ant-card");
      const lastComment = comments[0];
      // TODO: Check It
    },
    caseTimeout
  );

  afterAll(async () => {
    browser.close();
  });
});
