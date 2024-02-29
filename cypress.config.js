const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.{feature,features}',
    excludeSpecPattern: [
      '**/stepdefinitions/*/*/*', // Excluir archivos dentro de stepdefinitions
      '*.md', '*.ts' // Excluir archivos con extensiones .md y .ts
    ],
    defaultCommandTimeout: 15000,
    watchForFileChanges: false,
    baseUrl: 'https://pushing-it.vercel.app/',

    
    cucumber: {
      
      require: ['./cypress/integration/**/*.js'],
      format: ['json:cypress/reports/cucumber.json'],
    }
  },
});
