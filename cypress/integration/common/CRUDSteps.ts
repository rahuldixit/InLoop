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
var noEntries = 0;

When("I create new profile:", (tbl) => {    
  var testData = tbl.rawTable.slice(1)[0];
  Log(testData);
  userRecord = new UserRecord(testData[0],testData[1],DateCalculator(testData[2]),testData[3]);
  
  crudPage.isPageLoaded();  
  noEntries = crudPage.getNoEntries(userRecord.firstName+" "+userRecord.lastName);      
  
  crudPage.create();
  createPage.createRecord(userRecord);
  crudPage.isPageLoaded();
  ++noEntries;  
});

When("I edit the new profile:",  (tbl) => {
  var testData = tbl.rawTable.slice(1)[0];
  
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
  --noEntries;
});

When("I delete the new profile",  () => {
  crudPage.delete(userRecord.firstName);
  --noEntries;
});

When("I logout",  () => {
  crudPage.logout();
});

Then("the correct number of entries is displayed", ()=>  {   
  var actualEntries = crudPage.getNoEntries(userRecord.firstName+" "+userRecord.lastName);
  assert.equal(noEntries, actualEntries);
  
});

Then("profile is updated correctly", ()=>  {   
  crudPage.edit(userRecord.firstName+" "+userRecord.lastName);
  editPage.isPageLoaded();

  var actualUserDetails = editPage.getUserDetails();
  assert.equal(userRecord.firstName,actualUserDetails.firstName);
  assert.equal(userRecord.lastName,actualUserDetails.lastName);
  assert.equal(userRecord.startDate,actualUserDetails.startDate);
  assert.equal(userRecord.email,actualUserDetails.email);
  cy.get(editPage.backButton).click();
});
