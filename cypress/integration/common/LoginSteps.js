"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var steps_1 = require("cypress-cucumber-preprocessor/steps");
var LoginPage_1 = require("../POM/LoginPage");
var loginPage = new LoginPage_1.LoginPage();
steps_1.Given(/I login/, function () {
    loginPage.login();
});
steps_1.Then("I logout correctly", function () {
    loginPage.isPageLoaded();
});
