import { When } from '@cucumber/cucumber';
import loginPage from '../pageObjects/login.page.js';
import headSection from '../pageObjects/header.section.js';
import searchResultPage from '../pageObjects/search.result.page.js';
import productPage from '../pageObjects/product.page.js';

When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, async function (username, password) {
    await expect(await browser.getUrl()).toEqual(loginPage.url()); 
    await loginPage.login(username, password);  
});

When(/^I search by text "([^"]*)"$/, async function (text) {
    await headSection.enterSearch(text);
});

When(/^I select product "([^"]*)"$/, async function (product) {
    await expect(await browser.getUrl()).toContain(searchResultPage.url()); 
    await searchResultPage.clickProductByText(product);
});

When(/^I select color and size "([^"]*)" "([^"]*)"$/, async function (color, size) {
    await expect(await browser.getUrl()).toContain("html"); 
    await productPage.selectProduct(color,size);
});

When(/^I select "([^"]*)" under sale menu$/, async function (nav) {
    await headSection.selectNav(nav);
});

When(/^I filter with "([^"]*)" "([^"]*)" "([^"]*)"$/, async function (queryParameter, minPrice, maxPrice) {
    await headSection.applyFilter(queryParameter, `$${minPrice} - $${maxPrice}`);
});

