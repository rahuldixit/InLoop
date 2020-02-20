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
  public editAndUpdate()
  {
    cy.get('@userRecord').then((x: any)=>{this.keyWords.EnterText(this.firstNameField, x.firstName)});    
    cy.get('@userRecord').then((x: any)=>{this.keyWords.EnterText(this.lastNameField, x.lastName)});
    cy.get('@userRecord').then((x: any)=>{this.keyWords.EnterText(this.startDateField, x.startDate)});    
    cy.get('@userRecord').then((x: any)=>{this.keyWords.EnterText(this.emailField, x.email)});        
    cy.get("button[type='submit']").contains(this.updateButtonText).click();    
  }
  
  public checkUserDetails()
  {    
    cy.get("@userRecord").then((x:any)=>cy.get(this.firstNameField).invoke('val').then((y)=>{assert(x.firstName, y.toString())}));
    cy.get("@userRecord").then((x:any)=>cy.get(this.lastNameField).invoke('val').then((y)=>{assert(x.lastName, y.toString())}));
    cy.get("@userRecord").then((x:any)=>cy.get(this.startDateField).invoke('val').then((y)=>{assert(x.startDate, y.toString())}));
    cy.get("@userRecord").then((x:any)=>cy.get(this.emailField).invoke('val').then((y)=>{assert(x.email, y.toString())}));   
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


