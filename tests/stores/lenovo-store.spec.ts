import USHomePage from '../../pages/home/us-home.po'
import LenovoStorePage from '../../pages/stores/lenovo-store.po'
import ODPOneCartPage from '../../pages/stores/odp-onecart.po'
import OneCartPage from '../../pages/stores/one-cart.po'
import {Store} from '../../models/stores/store.model'

describe('Verifying One Cart', () => {

  const testData = require('../../test-data/stores.testdata.json');
  const lenovoStoreData = new Store(testData.lenovo);

  beforeEach(async() => {
     await USHomePage.navigateTo();
  });

  it('TC #1: Should search and navigate to lenovo store', async () => {
    await USHomePage.searchFor(lenovoStoreData.storeName);
    await LenovoStorePage.goToLenovoStore();
    await LenovoStorePage.selectFirstProduct();
    await ODPOneCartPage.addItemToCart();
    await expect(await OneCartPage.getOneCartMessage()).toContain('has been added to your cart')
  });

  xit('TC #2: Should remove an item from cart', async () => {
    await OneCartPage.navigateTo();
    await OneCartPage.removeItemFromCart("itemName");
    await expect(await OneCartPage.isProductExistingInCart("itemName")).toEqual(false);  
  });

});
