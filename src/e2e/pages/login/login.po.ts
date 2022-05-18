import BasePage from '../base.po';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {

    constructor() {
        super()
        this.url = 'login';
    }

    /**
     * define selectors using getter methods
     */
    get loginFormButton() { return $('#login_form_link'); }
    get inputEmail() { return $('#login-email'); }
    get inputPassword() { return $('#login-password'); }
    get btnSubmit() { return $('#submitButton'); }
    get logoutDropdown() { return $('.user-options'); }
    get logoutIcon() { return $('.ic-power.icon'); }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username: string, password: string) {
        await (await this.loginFormButton).click();
        await (await this.inputEmail).setValue(username);
        await (await this.inputPassword).setValue(password);
        await browser.pause(2000);
        await (await this.btnSubmit).click();
        await browser.pause(2000);

    }
    
    async logout() {
        await browser.pause(3000);
        await (await this.logoutDropdown).click();
        await this.waitForIsClickable(await this.logoutIcon);
        await (await this.logoutIcon).click();
        await browser.pause(5000);
    }
}

export default new LoginPage();
