import { When,Then } from "cypress-cucumber-preprocessor/steps";
import { CRUDPage } from "../POM/CRUDPage";
import { Log } from "../../Log/Log"
import { UserRecord } from "../../DataObjects/UserRecord";
import { CreatePage } from "../POM/CreatePage";
import { EditPage } from "../POM/EditPage";
import { DateCalculator } from "../../Helpers/DateCalculator";
    
var userRecord :UserRecord;
var crudPage = new CRUDPage();
var createPage = new CreatePage();
var editPage = new EditPage();

When("I create new profile:", (tbl) => {    
  var testData = tbl.rawTable.slice(1)[0];
  Log(testData);
  userRecord = new UserRecord(testData[0],testData[1],DateCalculator(testData[2]),testData[3]);
  
  crudPage.isPageLoaded();  
  crudPage.checkNoEntries(userRecord.firstName+" "+userRecord.lastName, "initial");      
  
  crudPage.create();
  createPage.createRecord(userRecord);
  crudPage.isPageLoaded();
});

When("I edit the new profile:",  (tbl) => {
  var testData = tbl.rawTable.slice(1)[0];
  crudPage.checkNoEntries(testData[0]+" "+testData[1], "initial");          
  crudPage.edit(userRecord.firstName+" "+userRecord.lastName);
  editPage.isPageLoaded();
  
  userRecord = new UserRecord(testData[0],testData[1],DateCalculator(testData[2]),testData[3]);  
  editPage.editAndUpdate(userRecord);
  crudPage.isPageLoaded();
});

When("I edit and delete the new profile",  () => {
  crudPage.edit(userRecord.firstName+" "+userRecord.lastName);
  editPage.isPageLoaded();

  editPage.deleteRecord();  
  crudPage.isPageLoaded();
});

When("I delete the new profile",  () => {
  crudPage.delete(userRecord.firstName);
  crudPage.isPageLoaded();
});

When("I logout",  () => {
  crudPage.logout();
});

Then("the correct number of entries is displayed after: {string}", (operation)=>  {   
  crudPage.checkNoEntries(userRecord.firstName+" "+userRecord.lastName, operation);      
});

Then("profile is updated correctly", ()=>  {  
  crudPage.edit(userRecord.firstName+" "+userRecord.lastName);
  editPage.isPageLoaded();

  editPage.checkUserDetails(userRecord);  
  cy.get(editPage.backButton).click();
});
