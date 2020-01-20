import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../POM/LoginPage";
import {Log} from "../../Log/Log"
import { dr } from "../../support/index";

let loginPage = new LoginPage();
     
Given(/I login/, () => {  
  loginPage.isPageLoaded();
  loginPage.login();    
});

Then("I logout correctly",  () => {
  loginPage.isPageLoaded();  
});

