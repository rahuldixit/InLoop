import { When,Then } from "cypress-cucumber-preprocessor/steps";
import { CRUDPage } from "../POM/CRUDPage";
import { UserRecord } from "../../DataObjects/UserRecord";
import { CreatePage } from "../POM/CreatePage";
import { EditPage } from "../POM/EditPage";
import { DateCalculator } from "../../Helpers/DateCalculator";
import {getCellByName} from './../../JSONReader/JSONReader'

var crudPage = new CRUDPage();
var createPage = new CreatePage();
var editPage = new EditPage();

When("I create new profile", () => {   
  
  cy.get('@TestData').then(async (x):Promise<UserRecord>=>{
    var userRecord = await new UserRecord(getCellByName(x,"Create", 'Test_1','FirstName'),getCellByName(x, "Create",'Test_1','LastName'),DateCalculator(getCellByName(x, "Create",'Test_1','Date')),getCellByName(x,"Create", 'Test_1','Email'));    
    return userRecord;
}).as('userRecord');

  cy.get("@userRecord").then(async (x:any):Promise<string>=>{return x.firstName +" "+x.lastName}).as('fullName');
  
  crudPage.isPageLoaded();  
  crudPage.checkNoEntries("initial");      
  
  crudPage.create();
  createPage.createRecord();
  crudPage.isPageLoaded();
});

When("I edit the new profile", () => {
  
  cy.get('@TestData').then(async (x):Promise<UserRecord>=>{
    var userRecord = await new UserRecord(getCellByName(x,"Edit", 'Test_1','FirstName'),getCellByName(x, "Edit",'Test_1','LastName'),DateCalculator(getCellByName(x, "Edit",'Test_1','Date')),getCellByName(x,"Edit", 'Test_1','Email'));    
    return userRecord;
  }).as('userRecord');  
  
  crudPage.isPageLoaded();
  crudPage.checkNoEntries("initial");          
  
  crudPage.edit();
  editPage.isPageLoaded();
  
  editPage.editAndUpdate();
  crudPage.isPageLoaded();
   
  cy.get("@userRecord").then(async (x:any):Promise<string>=>{return x.firstName +" "+x.lastName}).as('fullName');

});

When("I edit and delete the new profile",  () => {
  crudPage.edit();
  editPage.isPageLoaded();

  editPage.deleteRecord();  
  crudPage.isPageLoaded();
});

When("I delete the new profile",  () => {
  crudPage.delete();
  crudPage.isPageLoaded();
});

When("I logout",  () => {
  crudPage.logout();
});

Then("the correct number of entries is displayed after: {string}", (operation)=>  {   
  crudPage.checkNoEntries(operation);      
});

Then("profile is updated correctly", ()=>  {  
  crudPage.edit();
  editPage.isPageLoaded();

  editPage.checkUserDetails();  
  cy.get(editPage.backButton).click();
});
