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
    EditPage.prototype.editAndUpdate = function (userRecord) {
        this.keyWords.EnterText(this.firstNameField, userRecord.firstName);
        this.keyWords.EnterText(this.lastNameField, userRecord.lastName);
        this.keyWords.EnterText(this.startDateField, userRecord.startDate);
        this.keyWords.EnterText(this.emailField, userRecord.email);
        cy.get("button[type='submit']").contains(this.updateButtonText).click();
    };
    EditPage.prototype.getUserDetails = function () {
        var userRecord;
        userRecord.firstName = cy.get(this.firstNameField).invoke('val').toString();
        userRecord.lastName = cy.get(this.lastNameField).invoke('val').toString();
        userRecord.startDate = cy.get(this.startDateField).invoke('val').toString();
        userRecord.email = cy.get(this.emailField).invoke('val').toString();
        return userRecord;
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
