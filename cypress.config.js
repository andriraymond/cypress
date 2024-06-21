const { defineConfig } = require("cypress");

module.exports = defineConfig({
  redirectionLimit: 40,
  defaultCommandTimeout: 10000,
  e2e: {
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    viewportHeight: 768,
    viewportWidth: 1366,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "baseURL",
  },
});
