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
  
  public checkNoEntries(operation: string) 
  { 
    cy.get('@userRecord').then(async (x:any)=>{
      var fullName = x.firstName+" "+x.lastName;              
      if(isNullOrUndefined(this.userEntryMap.get(fullName)))
      { this.userEntryMap.set(fullName, [0,0] ); //entry[0] =  current number of entries, entry[1] = previous number of entries
      }
      return fullName;
    })
      .then(async (fullName: any):Promise<any>=> {
        var entries = this.userEntryMap.get(fullName);
        entries[0]=0;        
        return {entries, fullName};})
      .then(async (data: any): Promise<any> => { 
        cy.get(this.employeeList).find('li').each((x) =>
        {    
          var entryName = x.text().trim();
          if (entryName.localeCompare(data.fullName)==0)
          {  ++data.entries[0];                                        
          }
        }).then(():any=> {return data});
        })
      .then(async (data: any)=>{     
          if(operation == "initial" )
          { data.entries[1] = data.entries[0];   
          }
          else if(operation == "create" || operation == "edit")
          { 
            cy.log(data.entries[0]+" "+data.entries[1])
            ++data.entries[1];
            cy.waitUntil(()=>data.entries[0] == data.entries[1], {
              timeout: 20000, 
              interval: 500 
            });          
          }
          else if (operation == "delete" || operation == "edit and delete")
          { --data.entries[1];
            cy.waitUntil(async ()=>
            { data.entries[0] = 0;            
              cy.get(this.employeeList).find('li').each((x) =>
              {    
                var entryName = x.text().trim();
                if (entryName.localeCompare(data.fullName)==0)
                {  ++data.entries[0];                                        
                }
              });
              return data.entries[0]==data.entries[1];
            },{
              timeout: 20000, 
              interval: 500 
              });                      
          }
          this.userEntryMap.set(data.fullName,data.entries);          
        }
      );                 
    }
  


  public edit()
  {
    cy.get("@fullName").then((x:any)=>{cy.get(this.employeeList).contains(x).first().should('be.visible');});
    cy.get("@fullName").then((x:any)=>{cy.get(this.employeeList).contains(x).first().click();});
    cy.get(this.editButton).click();                 
  }
  
  public delete()
  {
    cy.get("@fullName").then((x:any)=>{cy.get(this.employeeList).contains(x).first().should('be.visible');});
    cy.get("@fullName").then((x:any)=>{cy.get(this.employeeList).contains(x).first().click();});
    cy.get(this.deleteButton).click();  
    cy.on('window:alert',cy.stub());
    cy.get(this.employeeList).get("li").first().trigger('mouseover');      
  }

  public logout()
  {
    cy.get(this.logoutButton).click();      
  }
}