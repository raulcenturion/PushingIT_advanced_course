const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/**/**/*.{feature,features}',
    excludeSpecPattern: ['**/stepdefinitions/*/*/*', '*.js', '*.md', '*.ts'],
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    baseUrl: 'https://pushing-front.vercel.app/',

    
    cucumber: {
      
      require: ['./cypress/integration/**/stepdefinitions/*.js'],
      format: ['json:cypress/reports/cucumber.json'],
    }
  },
});
