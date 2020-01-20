"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
exports.Log = function (text) {
    if (util_1.isNullOrUndefined(text))
        cy.writeFile("./cypress/screenshots/Log.txt", "Null or undefined text data", { flag: 'a+' });
    else
        cy.writeFile("./cypress/screenshots/Log.txt", text, { flag: 'a+' });
};
