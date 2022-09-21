const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w4svx7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      homePageWDU : "http://www.webdriveruniversity.com"
    },
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  }
});
