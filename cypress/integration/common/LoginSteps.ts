import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../POM/LoginPage";

let loginPage = new LoginPage();
     
Given(/I login/, () => { 
  loginPage.login();    
});

Then("I logout correctly",  () => {
  loginPage.isPageLoaded();  
});

