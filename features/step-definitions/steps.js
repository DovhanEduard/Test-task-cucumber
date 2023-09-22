const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}


Given(/^User is located on the main page of saucedemo website$/, async() => {
	await browser.url('https://www.saucedemo.com/');
});

When(/^User click “Login” button$/, async() => {
	(await LoginPage.btnSubmit).click();
});

Then(/^User should see the "([^"]*)" error message$/, async (args1) => {
	await expect(SecurePage.flashAlert).toHaveTextContaining('Epic sadface: Username is required');
});


