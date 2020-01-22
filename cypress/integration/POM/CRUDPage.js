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
var util_1 = require("util");
var CRUDPage = /** @class */ (function (_super) {
    __extends(CRUDPage, _super);
    function CRUDPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //elements
        _this.anchor = 'p#greetings';
        _this.createButton = "#bAdd";
        _this.editButton = "#bEdit";
        _this.deleteButton = "#bDelete";
        _this.logoutButton = ".main-button";
        _this.employeeList = "#employee-list";
        _this.userEntryMap = new Map();
        return _this;
    }
    //actions
    CRUDPage.prototype.create = function () {
        cy.get(this.createButton).click();
    };
    CRUDPage.prototype.checkNoEntries = function (fullName, operation) {
        var _this = this;
        cy.wait(2000);
        if (util_1.isNullOrUndefined(this.userEntryMap.get(fullName))) {
            this.userEntryMap.set(fullName, [0, 0]); //entry[0] =  current number of entries, entry[1] = previous number of entries
        }
        var entries = this.userEntryMap.get(fullName);
        entries[0] = 0;
        cy.get(this.employeeList).find('li').each(function (x) {
            var entryName = x.text().trim();
            if (entryName.localeCompare(fullName) == 0) {
                ++entries[0];
            }
        }).then(function () {
            if (operation == "initial") {
                entries[1] = entries[0];
            }
            else if (operation == "create" || operation == "edit") {
                assert.equal(entries[0], ++entries[1]);
            }
            else if (operation == "delete" || operation == "edit and delete") {
                assert.equal(entries[0], --entries[1]);
            }
            _this.userEntryMap.set(fullName, entries);
        });
    };
    CRUDPage.prototype.edit = function (fullName) {
        cy.get(this.employeeList).contains(fullName).first().should('be.visible');
        cy.get(this.employeeList).contains(fullName).first().click();
        cy.get(this.editButton).click();
    };
    CRUDPage.prototype.delete = function (fullName) {
        cy.get(this.employeeList).contains(fullName).first().should('be.visible');
        cy.get(this.employeeList).contains(fullName).first().click();
        cy.get(this.deleteButton).click();
        cy.on('window:alert', cy.stub());
    };
    CRUDPage.prototype.logout = function () {
        cy.get(this.logoutButton).click();
    };
    return CRUDPage;
}(Page_1.Page));
exports.CRUDPage = CRUDPage;
