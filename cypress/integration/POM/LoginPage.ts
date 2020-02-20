import {Page} from "./Page";


export  class LoginPage extends Page {
  
  //elements
  anchor='a[href="https://github.com/sectore/CafeTownsend-Angular-Rails"]';
  username = "input[ng-model='user.name']";
  password = "input[ng-model='user.password']";
  submit = "button[type='submit']";
  credentials = "p.info";

  //actions
  public login()
  {
     cy.get(this.credentials).invoke('text').then((x)=>{return x.toString().match('(?<=Username: ").*?(?=")')}).as('usernameCredential');
     cy.get(this.credentials).invoke('text').then((x)=>{return x.toString().match('(?<=Password: ").*?(?=")')}).as('passwordCredential');
    
     cy.get('@usernameCredential').then((x)=>{this.keyWords.EnterText(this.username,x.toString())}); 
     cy.get('@passwordCredential').then((x)=>{this.keyWords.EnterText(this.password,x.toString())});  
     cy.get(this.submit).click(); 
  } 
}


