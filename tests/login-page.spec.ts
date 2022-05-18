import { Login } from '../models/login/login.model';
import LoginPage from '../pages/login/login.po'

describe('Verifying Home page Navigation', () => {
    const testData = require('../test-data/login.testdata.json')
    const loginData = new Login(testData.employee)

    beforeEach(async () => {
        await LoginPage.navigateTo();
    });

    it('TC #1: Should navigate to login page', async () => {
      await LoginPage.login(loginData.email, loginData.password);
      await expect(browser).toHaveTitle('Perks at Work');
    });
});