const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  reporter: 'mochawesome',
  env: {
    url: "https://growth.deel.training/dev/salary-calculator"
  }, 
  retries: {
    runMode: 1,
  },
  projectId: '',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/Integration/Test/*.cy.js"
  },
});
