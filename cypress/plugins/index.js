const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const excelToJson = require('convert-excel-to-json');
const jsonfile = require('jsonfile');

module.exports = (on, config) => {
  
    const result = excelToJson({
    sourceFile: './cypress/fixtures/TestData.xlsx',
    header: {

        rows: 1 
    },
    columnToKey: {
      '*': '{{columnHeader}}'
    }
    });
    
    var file = './cypress/fixtures/TestData.json'
    jsonfile.writeFile(file, result);

    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config

    // Gherkin support
    const options = browserify.defaultOptions;
    options.browserifyOptions.plugin.unshift(['tsify']);
    on('file:preprocessor', cucumber(options));  
};

require('@applitools/eyes-cypress')(module);