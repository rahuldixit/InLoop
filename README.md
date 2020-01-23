# InLoop
CafeTownsend CRUD Tests
=======

This is a sample Cypress archtecture for test suites containing the following important components:

1. Typescript/Browserify transpilation to javascript for type based simpler and best practice javascript development
2. Page Object Model for application modelling
3. Gherkin and Step Definitions for English style description of business flows
4. Helper methods to assist with calculations and data processing
5. Data Objects to model common data entities used throughout the lifecyle of the application
6. Keyword wrapper to chain multple cypress commands where they are commonly used together
7. Mochawesome reports for html test viewing in artifacts folder, test summary in front page (circleci)
8. Logging capability for textual output debugging for test case failure
9. Screenshot and Video recorded and saved if a test fails

If you are pulling from the github repo and want to run it locally, please remember to do an 'npm update' then 'npx cypress run --browser=chrome'

If you want to see the flow working with circleci, make a cosmetic change like add a comment to the feature file '#abc' and commit. the workflow should be automtically triggered.
