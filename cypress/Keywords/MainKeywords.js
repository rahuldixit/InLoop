"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keywords = /** @class */ (function () {
    function Keywords() {
    }
    Keywords.prototype.EnterText = function (element, text) {
        cy.get(element).clear();
        cy.get(element).type(text);
    };
    return Keywords;
}());
exports.Keywords = Keywords;
;
