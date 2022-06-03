import BasePage from '../base.po';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OneCartPage extends BasePage {

    constructor() {
        super()
        this.url = "/onecart/index/uSource/H11"
    }

    async getOneCartMessage() {
        const oneCartMessages = await $$('//div[@class="onecart_message grid_9 top_space info"]/div');
        const oneCartMessage = await oneCartMessages[0];
        const successMessage = (await oneCartMessage.getText()).toString()
        return await successMessage;
    }

    async removeItemFromCart(itemName: string) {
        const removeLinks = await $$('//span[@class="item_name grid_3 alpha"]/a[contains(text(), "Lenovo")]/parent::*/parent::*/parent::*/following-sibling::*//a[text()="Remove"]')
        const removeLink = await removeLinks[0];
        await removeLink.click();
        await this.waitForInvisibility(removeLink);
    }

    async isProductExistingInCart(itemName: string) {
        const itemLinks = await $$('//span[@class="item_name grid_3 alpha"]/a[contains(text(), "Lenovo")]')
        const itemLink = await itemLinks[0]
        await this.waitForInvisibility(await itemLink);
        return await itemLink.isDisplayed();
    }

}

export default new OneCartPage();
