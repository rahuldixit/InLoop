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
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //elements
        _this.anchor = 'a[href="https://github.com/sectore/CafeTownsend-Angular-Rails"]';
        _this.username = "input[ng-model='user.name']";
        _this.password = "input[ng-model='user.password']";
        _this.submit = "button[type='submit']";
        _this.credentials = "p.info";
        return _this;
    }
    //actions
    LoginPage.prototype.login = function () {
        this.keyWords.EnterText(this.username, "Luke");
        this.keyWords.EnterText(this.password, "Skywalker");
        cy.get(this.submit).click();
    };
    return LoginPage;
}(Page_1.Page));
exports.LoginPage = LoginPage;
