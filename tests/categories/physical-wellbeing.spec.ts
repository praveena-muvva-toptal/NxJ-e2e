import {Category} from '../../models/Categories/category.model'
import CategoriesPage from '../../pages/categories/categories.po'

describe('Verifying Physical Wellbeing page Navigation', () => {

  const testData = require('../../test-data/categories.testdata.json');
  const CategoryData = new Category(testData.US.physicalWellbeing);

  beforeEach(async() => {
     await CategoriesPage.navigateTo();
  });

  it('TC #1: Should navigate to Physical Wellbeing category page', async () => {
    await CategoriesPage.navigateTo();
    await CategoriesPage.openCategoryPage(CategoryData.name, CategoryData.nav);
    await expect(browser).toHaveTitle("Physical Wellbeing - Next Jump Perks at Work");
  });

});
