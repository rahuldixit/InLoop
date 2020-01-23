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
     this.keyWords.EnterText(this.username,"Luke");   
     this.keyWords.EnterText(this.password,"Skywalker");    
     cy.get(this.submit).click(); 
  } 
}


