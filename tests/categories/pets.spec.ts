import {Category} from '../../models/Categories/category.model'
import CategoriesPage from '../../pages/categories/categories.po'

describe('Verifying Pets page Navigation', () => {

  const testData = require('../../test-data/categories.testdata.json');
  const CategoryData = new Category(testData.US.pets);

  beforeEach(async() => {
     await CategoriesPage.navigateTo();
  });

  it('TC #1: Should navigate to Pets category page', async () => {
    await CategoriesPage.navigateTo();
    await CategoriesPage.openCategoryPage(CategoryData.name, CategoryData.nav);
    await expect(browser).toHaveTitle("Pets - Next Jump Perks at Work");
  });

});
