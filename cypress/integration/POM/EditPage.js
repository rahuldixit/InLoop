"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = require("./Page");
var EditPage = /** @class */ (function (_super) {
    __extends(EditPage, _super);
    function EditPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //elements
        _this.anchor = ".bBack";
        _this.backButton = ".bBack";
        _this.firstNameField = "input[ng-model='selectedEmployee.firstName']";
        _this.lastNameField = "input[ng-model='selectedEmployee.lastName']";
        _this.startDateField = "input[ng-model='selectedEmployee.startDate']";
        _this.emailField = "input[ng-model='selectedEmployee.email']";
        _this.updateButtonText = "Update";
        _this.deleteButtonText = "Delete";
        return _this;
    }
    //actions
    EditPage.prototype.editAndUpdate = function () {
        var _this = this;
        cy.get('@userRecord').then(function (x) { _this.keyWords.EnterText(_this.firstNameField, x.firstName); });
        cy.get('@userRecord').then(function (x) { _this.keyWords.EnterText(_this.lastNameField, x.lastName); });
        cy.get('@userRecord').then(function (x) { _this.keyWords.EnterText(_this.startDateField, x.startDate); });
        cy.get('@userRecord').then(function (x) { _this.keyWords.EnterText(_this.emailField, x.email); });
        cy.get("button[type='submit']").contains(this.updateButtonText).click();
    };
    EditPage.prototype.checkUserDetails = function () {
        var _this = this;
        cy.get("@userRecord").then(function (x) { return cy.get(_this.firstNameField).invoke('val').then(function (y) { assert(x.firstName, y.toString()); }); });
        cy.get("@userRecord").then(function (x) { return cy.get(_this.lastNameField).invoke('val').then(function (y) { assert(x.lastName, y.toString()); }); });
        cy.get("@userRecord").then(function (x) { return cy.get(_this.startDateField).invoke('val').then(function (y) { assert(x.startDate, y.toString()); }); });
        cy.get("@userRecord").then(function (x) { return cy.get(_this.emailField).invoke('val').then(function (y) { assert(x.email, y.toString()); }); });
    };
    EditPage.prototype.deleteRecord = function () {
        cy.get(".main-button").contains(this.deleteButtonText).click();
        cy.on('window:alert', cy.stub());
    };
    EditPage.prototype.editAndDelete = function () {
        cy.get("button[type='submit']").contains(this.deleteButtonText).click();
    };
    return EditPage;
}(Page_1.Page));
exports.EditPage = EditPage;
