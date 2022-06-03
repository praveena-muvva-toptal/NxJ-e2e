import BasePage from '../base.po';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ODPOneCartPage extends BasePage {

    constructor() {
        super()
    }

    get addToCartButton() {return $('button=Add to Cart')}


    async addItemToCart() {
        await (await this.addToCartButton).click();
    }

}

export default new ODPOneCartPage();
