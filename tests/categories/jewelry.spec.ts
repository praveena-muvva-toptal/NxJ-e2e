import {Category} from '../../models/Categories/category.model'
import CategoriesPage from '../../pages/categories/categories.po'

describe('Verifying Jewelry Category', () => {

  const testData = require('../../test-data/categories.testdata.json');
  const CategoryData = new Category(testData.US.jewelry);

  beforeEach(async() => {
     await CategoriesPage.navigateTo();
  });

  it('TC #1: Should navigate to Jewelry category page', async () => {
    await CategoriesPage.navigateTo();
    await CategoriesPage.openCategoryPage(CategoryData.name, CategoryData.nav);
    await expect(browser).toHaveTitle("Jewelry - Next Jump Perks at Work");
  });

});
