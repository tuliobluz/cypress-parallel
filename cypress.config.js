const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://github.com/',
    viewportWidth: process.env.WIDTH || 1920,
    viewportHeight: process.env.HEIGHT || 1080
  },
});
