const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://totvsbettio.qarol.ai',
    watchForFileChanges: false
  },
});