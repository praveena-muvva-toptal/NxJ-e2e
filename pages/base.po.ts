export default class BasePage {
  // Base class contianing all the common methods and page elements which can be re-used across the modules
  public url!: string;

  constructor() {
  }

  async navigateTo() {
      await browser.url(`https://www.perksatwork.com/${this.url}`);
  }

  async waitForVisibility(element: WebdriverIO.Element) {
      await (await element).waitForDisplayed({timeout: 60000});
  }

  async waitForInvisibility(element: WebdriverIO.Element) {
      await (await element).waitForDisplayed({timeout: 60000, reverse: true});
  }

  async waitForIsClickable(element: WebdriverIO.Element) {
    await (await element).waitForClickable({timeout: 60000});
  }
}
