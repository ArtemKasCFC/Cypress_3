const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  if (!fs.existsSync(pathToConfigFile)) {
    console.log('File does not exists')
  }
  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: 'w4svx7',
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile
      return getConfigurationByFile(file)
    },
    env: {
      homePageWDU: "http://www.webdriveruniversity.com"
    },
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  }
});