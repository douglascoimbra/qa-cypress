const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {

    baseUrl: 'https://totvscypress.qarol.ai',
    watchForFileChanges: false,
    defaultCommandTimeout: 20000
  },
});