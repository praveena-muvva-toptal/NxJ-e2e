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

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username: string, password: string) {
        await (await this.loginFormButton).click();
        await (await this.inputEmail).setValue(username);
        await (await this.inputPassword).setValue(password);
        await browser.pause(5000); // There is a chane to reduce the occurance of captcha with increased wait time
        await (await this.btnSubmit).click();
        await browser.pause(2000);

    }
}

export default new LoginPage();
