import { isNullOrUndefined } from "util";

export const Log = (text: string) => {
    if(isNullOrUndefined(text)) 
        cy.writeFile("./cypress/screenshots/Log.txt", "Null or undefined text data", {flag: 'a+' } )
    else
        cy.writeFile("./cypress/screenshots/Log.txt",text,{ flag: 'a+' });
    };