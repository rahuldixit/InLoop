// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import '@applitools/eyes-cypress/commands';
import './commands';

const xhrData = [];

    //Hooks
    before(function () {
        cy.fixture('./TestData').as('TestData');                       

        // runs once before all tests in the block
        cy.server({
            // Here we hanDle all requests passing through Cypress' server
            onResponse: (response) => {
            if (Cypress.env('record')) {
                const url = response.url;
                const method = response.method;
                const data = response.response.body;
                // We push a new entry into the xhrData array
                xhrData.push({ url, method, data });
            }
            }
        });
        
        // This tells Cypress to hook into any GET request
        if (Cypress.env('record')) {
            cy.route({
            method: 'GET',
            url: '*',
            });
            cy.route({
                method: 'POST',
                url: '*',
                });
        }

        // Load stubbed data from local JSON file
        if (!Cypress.env('record')) {
            cy.fixture('fixture')
            .then((data) => {
                for (let i = 0, length = data.length; i < length; i++) {
                    cy.route(data[i].method, data[i].url, data[i].data);
                }
            });
        }
    });
    
    beforeEach(function () {        

        cy.visit(Cypress.config().baseUrl);
        // runs before each test in the block
        cy.eyesOpen({
            appName: 'CafeTownsend',
            testName: 'Complete Happy Path',
            browser: {
                "viewportWidth": 1000,
                "viewportHeight": 660
              },
          });                       
    });
    
    after(function () {
        // runs once after all tests in the block        
        if (Cypress.env('record')) {
            const path = './cypress/fixtures/fixture.json';
            cy.writeFile(path, xhrData);
            cy.log("Wrote "+ xhrData.length +" XHR responses to local file "+path);
        } 
    });

    afterEach(function () {
        // runs after each test in the block
        cy.eyesClose();
        cy.reload();            
    });


    