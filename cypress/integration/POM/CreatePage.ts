import {Page} from "./Page";
import {UserRecord} from "../../DataObjects/UserRecord";


export class CreatePage extends Page {
  
  //elements
  anchor = ".bCancel";
  cancel = ".bCancel";
  firstNameField = "input[ng-model='selectedEmployee.firstName']";
  lastNameField = "input[ng-model='selectedEmployee.lastName']";
  startDateField = "input[ng-model='selectedEmployee.startDate']";
  emailField = "input[ng-model='selectedEmployee.email']";
  addButton = "button[ng-show='isCreateForm']";

  //actions
  public createRecord(userRecord: UserRecord )
  {
    this.keyWords.EnterText(this.firstNameField, userRecord.firstName);
    this.keyWords.EnterText(this.lastNameField, userRecord.lastName);
    this.keyWords.EnterText(this.startDateField, userRecord.startDate);
    this.keyWords.EnterText(this.emailField, userRecord.email);    
    cy.get(this.addButton).click();    
  }    
}


