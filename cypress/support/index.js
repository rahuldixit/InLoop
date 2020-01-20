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

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
import {Log} from "./../Log/Log";

    //Hooks
    before(async function () {
        // runs once before all tests in the block        
 
    });
    after(function () {
        // runs once after all tests in the block
    });
    beforeEach(function () {
        Log("Test starting!");
        cy.visit(Cypress.config().baseUrl);
        // runs before each test in the block
    });
    afterEach(function () {
        // runs after each test in the block
        
    });


    