import { Then } from '@cucumber/cucumber';
import loginPage from '../pageObjects/login.page.js';
import cartPage from '../pageObjects/cart.page.js';
import salePage from '../pageObjects/sale.page.js';
import * as constant from '../constants/constant';


Then(/^I should see the invalid message on the landing page$/, async function () {
  await expect(await loginPage.errorMessage.getText()).toEqual(constant.INVALID_LOGIN_PASSWORD_MSG);
});

Then(/^I should see the validation error message on the landing page$/, async function () {
  await expect(await loginPage.validationEmailError.getText()).toEqual(constant.REQUIRED_FIELD_ERROR);
  await expect(await loginPage.validationPassError.getText()).toEqual(constant.REQUIRED_FIELD_ERROR);
});

Then(/^I should see product "([^"]*)" added to the cart$/, async function (productName) {
  await expect(await browser.getUrl()).toEqual(cartPage.url()); 
  await cartPage.verifyProductIsAddedToCart(productName);
});

Then(/^I should see list of products under sale page$/, async function () {
  await expect(await browser.getUrl()).toEqual(salePage.url()); 
  await expect(salePage.categoryProduct).toBeDisplayed();
});

Then(/^I should see list of products is filtered with price "([^"]*)" "([^"]*)"$/, async function (minPrice, maxPrice) {
  expect(await salePage.getPriceFilterElement(minPrice, maxPrice)).toBeDisplayed();
  await salePage.verifyProductItemsWithinPriceRange(minPrice, maxPrice);
});
