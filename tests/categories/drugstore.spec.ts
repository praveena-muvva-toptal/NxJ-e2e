import {Category} from '../../models/Categories/category.model'
import CategoriesPage from '../../pages/categories/categories.po'

describe('Verifying Drugstore Category', () => {

  const testData = require('../../test-data/categories.testdata.json');
  const CategoryData = new Category(testData.US.drugstore);

  beforeEach(async() => {
     await CategoriesPage.navigateTo();
  });

  it('TC #1: Should navigate to Drugstore category page', async () => {
    await CategoriesPage.navigateTo();
    await CategoriesPage.openCategoryPage(CategoryData.name, CategoryData.nav);
    await expect(browser).toHaveTitle("Drugstore - Next Jump Perks at Work");
  });

});
