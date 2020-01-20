import {Page} from "./Page";
import {UserRecord} from "../../DataObjects/UserRecord";

export class EditPage extends Page {
  
  //elements
  anchor = ".bBack";
  backButton = ".bBack";
  firstNameField = "input[ng-model='selectedEmployee.firstName']";
  lastNameField = "input[ng-model='selectedEmployee.lastName']";
  startDateField = "input[ng-model='selectedEmployee.startDate']";
  emailField = "input[ng-model='selectedEmployee.email']";
  updateButtonText = "Update";
  deleteButtonText = "Delete";

  //actions
  public editAndUpdate(userRecord: UserRecord )
  {
    this.keyWords.EnterText(this.firstNameField, userRecord.firstName);
    this.keyWords.EnterText(this.lastNameField, userRecord.lastName);
    this.keyWords.EnterText(this.startDateField, userRecord.startDate);
    this.keyWords.EnterText(this.emailField, userRecord.email);    
    cy.get("button[type='submit']").contains(this.updateButtonText).click();    
  }
  
  public getUserDetails() : UserRecord
  {
    let userRecord: UserRecord;
    userRecord.firstName =  cy.get(this.firstNameField).invoke('val').toString();
    userRecord.lastName = cy.get(this.lastNameField).invoke('val').toString();
    userRecord.startDate = cy.get(this.startDateField).invoke('val').toString();
    userRecord.email = cy.get(this.emailField).invoke('val').toString();
    return userRecord;
  }

  public deleteRecord()
  {
    cy.get(".main-button").contains(this.deleteButtonText).click();  
    cy.on('window:alert',cy.stub());
  }

  public editAndDelete() 
  {    
    cy.get("button[type='submit']").contains(this.deleteButtonText).click();
  } 
}


