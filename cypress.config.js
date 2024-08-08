const { defineConfig } = require("cypress");

module.exports = defineConfig({
  redirectionLimit: 40,
  defaultCommandTimeout: 10000,
  viewportHeight: 768,
  viewportWidth: 1366,
  // screenshotsFolder: "cypress/screenshots",
  // screenshotOnRunFailure: true,
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/SS",
  video: true,
  watchForFileChanges: false,
  pageLoadTimeout: 120000,
  videosFolder: "cypress/videos",
  experimentalStudio: true,
  e2e: {
    videoCompression: true,
    // screenshotOnRunFailure: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("after:screenshot", (details) => {
        console.log(details);
      });
    },
    // Don't forget to change the url in the config
    baseUrl: "https://muatmuat.com/",
    // demoqaURL: "https://demoqa.com/webtables",
  },
});
