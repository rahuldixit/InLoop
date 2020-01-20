"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var steps_1 = require("cypress-cucumber-preprocessor/steps");
var CRUDPage_1 = require("../POM/CRUDPage");
var Log_1 = require("../../Log/Log");
var UserRecord_1 = require("../../DataObjects/UserRecord");
var CreatePage_1 = require("../POM/CreatePage");
var EditPage_1 = require("../POM/EditPage");
var DateCalculator_1 = require("../../Helpers/DateCalculator");
var userRecord;
var crudPage = new CRUDPage_1.CRUDPage();
var createPage = new CreatePage_1.CreatePage();
var editPage = new EditPage_1.EditPage();
var noEntries = 0;
steps_1.When("I create new profile:", function (tbl) {
    var testData = tbl.rawTable.slice(1)[0];
    Log_1.Log(testData);
    userRecord = new UserRecord_1.UserRecord(testData[0], testData[1], DateCalculator_1.DateCalculator(testData[2]), testData[3]);
    crudPage.isPageLoaded();
    noEntries = crudPage.getNoEntries(userRecord.firstName + " " + userRecord.lastName);
    crudPage.create();
    createPage.createRecord(userRecord);
    crudPage.isPageLoaded();
    ++noEntries;
});
steps_1.When("I edit the new profile:", function (tbl) {
    var testData = tbl.rawTable.slice(1)[0];
    crudPage.edit(userRecord.firstName + " " + userRecord.lastName);
    editPage.isPageLoaded();
    userRecord = new UserRecord_1.UserRecord(testData[0], testData[1], DateCalculator_1.DateCalculator(testData[2]), testData[3]);
    editPage.editAndUpdate(userRecord);
    crudPage.isPageLoaded();
});
steps_1.When("I edit and delete the new profile", function () {
    crudPage.edit(userRecord.firstName + " " + userRecord.lastName);
    editPage.isPageLoaded();
    editPage.deleteRecord();
    crudPage.isPageLoaded();
    --noEntries;
});
steps_1.When("I delete the new profile", function () {
    crudPage.delete(userRecord.firstName);
    --noEntries;
});
steps_1.When("I logout", function () {
    crudPage.logout();
});
steps_1.Then("the correct number of entries is displayed", function () {
    var actualEntries = crudPage.getNoEntries(userRecord.firstName + " " + userRecord.lastName);
    assert.equal(noEntries, actualEntries);
});
steps_1.Then("profile is updated correctly", function () {
    crudPage.edit(userRecord.firstName + " " + userRecord.lastName);
    editPage.isPageLoaded();
    var actualUserDetails = editPage.getUserDetails();
    assert.equal(userRecord.firstName, actualUserDetails.firstName);
    assert.equal(userRecord.lastName, actualUserDetails.lastName);
    assert.equal(userRecord.startDate, actualUserDetails.startDate);
    assert.equal(userRecord.email, actualUserDetails.email);
    cy.get(editPage.backButton).click();
});
