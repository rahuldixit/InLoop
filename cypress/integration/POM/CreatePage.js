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
var CreatePage = /** @class */ (function (_super) {
    __extends(CreatePage, _super);
    function CreatePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //elements
        _this.anchor = ".bCancel";
        _this.cancel = ".bCancel";
        _this.firstNameField = "input[ng-model='selectedEmployee.firstName']";
        _this.lastNameField = "input[ng-model='selectedEmployee.lastName']";
        _this.startDateField = "input[ng-model='selectedEmployee.startDate']";
        _this.emailField = "input[ng-model='selectedEmployee.email']";
        _this.addButton = "button[ng-show='isCreateForm']";
        return _this;
    }
    //actions
    CreatePage.prototype.createRecord = function (userRecord) {
        this.keyWords.EnterText(this.firstNameField, userRecord.firstName);
        this.keyWords.EnterText(this.lastNameField, userRecord.lastName);
        this.keyWords.EnterText(this.startDateField, userRecord.startDate);
        this.keyWords.EnterText(this.emailField, userRecord.email);
        cy.get(this.addButton).click();
    };
    return CreatePage;
}(Page_1.Page));
exports.CreatePage = CreatePage;
