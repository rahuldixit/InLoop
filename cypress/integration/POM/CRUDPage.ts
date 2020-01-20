import {Page} from "./Page";

export  class CRUDPage extends Page {
  
  //elements
  anchor='p#greetings';
  createButton = "#bAdd";
  editButton = "#bEdit";
  deleteButton = "#bDelete";
  logoutButton = ".main-button";
  employeeList = "#employee-list"
    
  //actions
  public create()
  {
    cy.get(this.createButton).click();  
  }
  
  public getNoEntries(fullName: string) : number
  {
    let noEntries: number = 0;
    
      let a = cy.get(this.employeeList).find('li').each( (x) =>
      {  
        var entryName = x.text().trim();
        if (entryName.localeCompare(fullName)==0)
        { 
           ++noEntries;                              
        }             
        
      }).then(():number=>{return noEntries;});
      
      
    //cy.log('w'+ a.then());
    
    return 1;
  }

  public edit(fullName: string)
  {
    cy.get(this.employeeList).contains(fullName).first().should('be.visible');
    cy.get(this.employeeList).contains(fullName).first().click();
    cy.get(this.editButton).click();  
  }
  
  public delete(fullName: string)
  {
    cy.get(this.employeeList).contains(fullName).first().should('be.visible');
    cy.get(this.employeeList).contains(fullName).first().click();
    cy.get(this.deleteButton).click();  
    cy.on('window:alert',cy.stub());
  }

  public logout()
  {
    cy.get(this.logoutButton).click();      
  }
}