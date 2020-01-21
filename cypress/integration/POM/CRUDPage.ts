import {Page} from "./Page";
import { isNullOrUndefined } from "util";

export  class CRUDPage extends Page {
  
  //elements
  anchor='p#greetings';
  createButton = "#bAdd";
  editButton = "#bEdit";
  deleteButton = "#bDelete";
  logoutButton = ".main-button";
  employeeList = "#employee-list";
  userEntryMap = new Map<string, Object>(); 
  //actions
  public create()
  {
    cy.get(this.createButton).click();  
  }
  
  public checkNoEntries(fullName: string, operation: string) 
  { if(isNullOrUndefined(this.userEntryMap.get(fullName)))
    {
      this.userEntryMap.set(fullName, [0,0] ); //entry[0] =  current number of entries, entry[1] = previous number of entries
    }
    
    var entries = this.userEntryMap.get(fullName);
    entries[0]=0;
    
    cy.get(this.employeeList).find('li').each( (x) =>
      { var entryName = x.text().trim();
        if (entryName.localeCompare(fullName)==0)
        { 
           ++entries[0];                              
        }                     
      }).then(()=>{
        if(operation == "initial")
        { entries[1] = entries[0];                    
        }
        else if(operation == "create" || operation == "edit")
        { 
          assert.equal(entries[0], ++entries[1]);          
        }
        else if (operation == "delete" || operation == "edit and delete")
        { assert.equal(entries[0], --entries[1]);          
        }
        this.userEntryMap.set(fullName,entries);          
      });      
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
    cy.wait(5000);
  }

  public logout()
  {
    cy.get(this.logoutButton).click();      
  }
}