export class Keywords
    {
        constructor()
        {
        }

        public EnterText(element: string, text: string)
        {
            cy.get(element).clear();
            cy.get(element).type(text);                        
        }
    };
