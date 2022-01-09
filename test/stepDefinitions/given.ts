import { Given } from '@cucumber/cucumber';
import loginPage from '../pageobjects/login.page.js';
import headerSection from '../pageobjects/header.section.js';
import * as constant from '../constants/constant';

Given(/^I am on the ctqatest login page$/, async function () {
  await browser.url(loginPage.url()); 
  await expect(await browser.getTitle()).toEqual(constant.LOGIN_TITLE);
});

Given(/^I am on the ctqatest landing page$/, async function () {
  await browser.url(headerSection.url());
  await expect(await browser.getTitle()).toEqual(constant.LANDING_TITLE);
});