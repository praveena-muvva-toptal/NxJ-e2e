import BasePage from '../base.po';
import { Home } from '../../models/home/home.model';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class USHomePage extends BasePage {

    constructor() {
        super()
        this.url = '/auth/loginorg/o/Next Jump';
    }

    get globalSearchBar() { return $('#paw_header_search_input_mobile')}
    get globalSearchIcon() { return $('#paw_header_search_button')}

    async searchFor(searchKey: string) {
        await (await this.globalSearchBar).clearValue();
        await (await this.globalSearchBar).setValue(searchKey);
        // await (await this.globalSearchIcon).click();
        await browser.keys('Enter');
    }

}

export default new USHomePage();
