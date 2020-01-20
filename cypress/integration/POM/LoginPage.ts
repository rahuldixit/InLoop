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
     //cy.get(this.credentials).invoke('text').then((x)=>Log(x.text.toString()));
     //cy.get(this.credentials).invoke('text').then(x=>{x.text.toString().match('(?s)(?<=Username: ").*?(?=")')}).as('usernameCredential');
     //cy.get(this.credentials).invoke('text').then($_=>$_.text.toString().match('(?s)(?<=Password: ").*?(?=")')).as('passwordCredential');

     cy.get(this.username).type("Luke");   
     cy.get(this.password).type("Skywalker");    
     cy.get(this.submit).click(); 
  }

 
}


