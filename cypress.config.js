const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://www.jadu.net/xfp/form/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
