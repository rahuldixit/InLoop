"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var steps_1 = require("cypress-cucumber-preprocessor/steps");
var CRUDPage_1 = require("../POM/CRUDPage");
var UserRecord_1 = require("../../DataObjects/UserRecord");
var CreatePage_1 = require("../POM/CreatePage");
var EditPage_1 = require("../POM/EditPage");
var DateCalculator_1 = require("../../Helpers/DateCalculator");
var JSONReader_1 = require("./../../JSONReader/JSONReader");
var LoginPage_1 = require("../POM/LoginPage");
var crudPage = new CRUDPage_1.CRUDPage();
var createPage = new CreatePage_1.CreatePage();
var editPage = new EditPage_1.EditPage();
var loginPage = new LoginPage_1.LoginPage();
steps_1.When("I create new profile", function () {
    cy.get('@TestData').then(function (x) { return __awaiter(void 0, void 0, void 0, function () {
        var userRecord;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new UserRecord_1.UserRecord(JSONReader_1.getCellByName(x, "Create", 'Test_1', 'FirstName'), JSONReader_1.getCellByName(x, "Create", 'Test_1', 'LastName'), DateCalculator_1.DateCalculator(JSONReader_1.getCellByName(x, "Create", 'Test_1', 'Date')), JSONReader_1.getCellByName(x, "Create", 'Test_1', 'Email'))];
                case 1:
                    userRecord = _a.sent();
                    return [2 /*return*/, userRecord];
            }
        });
    }); }).as('userRecord');
    cy.get("@userRecord").then(function (x) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, x.firstName + " " + x.lastName];
    }); }); }).as('fullName');
    crudPage.isPageLoaded();
    crudPage.checkNoEntries("initial");
    crudPage.create();
    createPage.isPageLoaded();
    createPage.createRecord();
    crudPage.isPageLoaded();
});
steps_1.When("I edit the new profile", function () {
    cy.get('@TestData').then(function (x) { return __awaiter(void 0, void 0, void 0, function () {
        var userRecord;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new UserRecord_1.UserRecord(JSONReader_1.getCellByName(x, "Edit", 'Test_1', 'FirstName'), JSONReader_1.getCellByName(x, "Edit", 'Test_1', 'LastName'), DateCalculator_1.DateCalculator(JSONReader_1.getCellByName(x, "Edit", 'Test_1', 'Date')), JSONReader_1.getCellByName(x, "Edit", 'Test_1', 'Email'))];
                case 1:
                    userRecord = _a.sent();
                    return [2 /*return*/, userRecord];
            }
        });
    }); }).as('userRecord');
    crudPage.isPageLoaded();
    crudPage.checkNoEntries("initial");
    crudPage.edit();
    editPage.isPageLoaded();
    editPage.editAndUpdate();
    crudPage.isPageLoaded();
    cy.get("@userRecord").then(function (x) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, x.firstName + " " + x.lastName];
    }); }); }).as('fullName');
});
steps_1.When("I edit and delete the new profile", function () {
    crudPage.isPageLoaded();
    crudPage.edit();
    editPage.isPageLoaded();
    editPage.deleteRecord();
    crudPage.isPageLoaded();
});
steps_1.When("I delete the new profile", function () {
    crudPage.isPageLoaded();
    crudPage.delete();
    crudPage.isPageLoaded();
});
steps_1.When("I logout", function () {
    crudPage.logout();
    loginPage.isPageLoaded();
});
steps_1.Then("the correct number of entries is displayed after: {string}", function (operation) {
    crudPage.checkNoEntries(operation);
});
steps_1.Then("profile is updated correctly", function () {
    crudPage.isPageLoaded();
    crudPage.edit();
    editPage.isPageLoaded();
    editPage.checkUserDetails();
    cy.get(editPage.backButton).click();
    crudPage.isPageLoaded();
});
