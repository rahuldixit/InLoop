"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainKeywords_1 = require("./../../Keywords/MainKeywords");
var Page = /** @class */ (function () {
    function Page() {
        this.anchor = "";
        this.keyWords = new MainKeywords_1.Keywords();
        this.isPageLoaded();
    }
    Page.prototype.isPageLoaded = function () {
        cy.get(this.anchor).should('be.visible');
        cy.eyesCheckWindow({
            ignore: [
                { selector: "input[ng-model='selectedEmployee.startDate']" } //ignore data snapshot checking which will change bw days
            ]
        });
    };
    return Page;
}());
exports.Page = Page;
