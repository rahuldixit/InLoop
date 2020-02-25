import {Keywords} from "./../../Keywords/MainKeywords";

export abstract class Page {
    
  public anchor :string = "";
  public keyWords = new Keywords();

  constructor() {            
  }
  
  isPageLoaded() 
  {
      cy.get(this.anchor).should('be.visible');
      cy.eyesCheckWindow({
        ignore: [
          {selector: "input[ng-model='selectedEmployee.startDate']"} //ignore data snapshot checking which will change bw days
        ]
      });      
  }
}


