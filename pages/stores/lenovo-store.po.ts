import BasePage from '../base.po';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LenovoStorePage extends BasePage {

    constructor() {
        super()
    }

    get firstProductInStore() {return $('[href="/product/index/nxjid/2139_20U5S0NQ00?uSource=STREPP"]')}


    async goToLenovoStore() {
        const lenovoStoreLinks = await $$('//a/div[text()="Lenovo"]');
        const lenovoStoreLink = await lenovoStoreLinks[1];
        await lenovoStoreLink.click();
    }

    async selectFirstProduct() {
        await (await this.firstProductInStore).click();
        await browser.pause(2000);
        var handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
    }

}

export default new LenovoStorePage();
