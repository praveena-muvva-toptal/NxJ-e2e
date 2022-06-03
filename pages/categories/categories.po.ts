import { ElementArray } from 'webdriverio';
import BasePage from '../base.po';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CategoriesPage extends BasePage {

    constructor() {
        super()
    }

    
    async openCategoryPage(category: string, nav: string) {
        if(nav == "more") {
            const moreLinks = await $$('//a[contains(@id, "dropdown") and contains(text(), "More")]');
            const moreLink = await moreLinks[0];
            await moreLink.click();
            await this.waitForVisibility(await $('//a[@class="shopping_menu_item_link"]/div[contains(text(), \''+ category +'\')]'));
            const categoryLinks = await $$('//a[@class="shopping_menu_item_link"]/div[contains(text(), \''+ category +'\')]');
            const categoryLink = await categoryLinks[0];
            await categoryLink.click();
        }
        else {
            const categoryLinks = await $$('//a[contains(@id, "dropdown") and contains(text(), \''+ category +'\')]');
            const categoryLink = await categoryLinks[0];
            await categoryLink.click();
        }
    }

}

export default new CategoriesPage();
