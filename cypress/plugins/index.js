const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on, config) => {
  
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // Gherkin support
  const options = browserify.defaultOptions;
  options.browserifyOptions.plugin.unshift(['tsify']);
  on('file:preprocessor', cucumber(options));
  

};

