import {Keywords} from "./../../Keywords/MainKeywords";

export abstract class Page {
    
  public anchor :string = "";
  public keyWords = new Keywords();

  constructor() {        
  }
  
  isPageLoaded() 
  {
      cy.get(this.anchor).should('be.visible');
  }
}


