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
  addButton = "button[type='submit']";
  addText = "Add";

  //actions
  public createRecord( )
  {
    cy.get('@userRecord').then((x: any)=>{this.keyWords.EnterText(this.firstNameField, x.firstName)});    
    cy.get('@userRecord').then((x: any)=>{this.keyWords.EnterText(this.lastNameField, x.lastName)});
    cy.get('@userRecord').then((x: any)=>{this.keyWords.EnterText(this.startDateField, x.startDate)});    
    cy.get('@userRecord').then((x: any)=>{this.keyWords.EnterText(this.emailField, x.email)});        
    cy.get(this.addButton).contains(this.addText).click();    
  }    
}


