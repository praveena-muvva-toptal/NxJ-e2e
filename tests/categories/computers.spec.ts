import {Category} from '../../models/Categories/category.model'
import CategoriesPage from '../../pages/categories/categories.po'

describe('Verifying Computers Category', () => {

  const testData = require('../../test-data/categories.testdata.json');
  const CategoryData = new Category(testData.US.computers);

  beforeEach(async() => {
     await CategoriesPage.navigateTo();
  });

  it('TC #1: Should navigate to Computers category page', async () => {
    await CategoriesPage.navigateTo();
    await CategoriesPage.openCategoryPage(CategoryData.name, CategoryData.nav);
    await expect(browser).toHaveTitle("Computers & Software - Next Jump Perks at Work");
  });

});
