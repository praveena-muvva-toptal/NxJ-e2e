import { Home } from '../models/home/home.model';
import USHomePage from '../pages/home/us-home.po'

describe('Verifying Home page Navigation', () => {

  const testData = require('../test-data/home.testdata.json');
  const homePageData = new Home(testData.US);

  beforeEach(async() => {
     await USHomePage.navigateTo();
  });

  it('TC #1: Should navigate to given Org', async () => {
    await USHomePage.navigateTo();
    await expect(browser).toHaveTitle(homePageData.orgName + ' Perks at Work');
  });

});
