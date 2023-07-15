const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const  {
  addCucumberPreprocessorPlugin,
  beforeRunHandler,
  afterRunHandler,
  beforeSpecHandler,
  afterSpecHandler,
  afterScreenshotHandler,
}  = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
   watchForFileChanges: true,
  defaultCommandTimeout: 5000,
  reporter: "mochawesome",
  reporterOptions:{
      charts:true,
      overwrite:false,
      html: false,
      json: true,
      reportDir: "cypress/reports"
  },
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
      addCucumberPreprocessorPlugin(on, config, {
        omitBeforeRunHandler: true,
        omitAfterRunHandler: true,
        omitBeforeSpecHandler: true,
        omitAfterSpecHandler: true,
        omitAfterScreenshotHandler: true,
      });
      on("before:run", async (details) => {
        await beforeRunHandler(config);

        // Your own `before:run` code goes here.
      });

      on("after:run", async (results) => {
        await afterRunHandler(config);

        // Your own `after:run` code goes here.
      });

      on("before:spec", async (spec) => {
        await beforeSpecHandler(config);

        // Your own `before:spec` code goes here.
      });

      on("after:spec", async (spec, results) => {
        await afterSpecHandler(config, spec, results);

        // Your own `after:spec` code goes here.
      });

      on("after:screenshot", async (details) => {
        await afterScreenshotHandler(config, details);

        // Your own `after:screenshot` code goes here.
      });

     on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
    );
    
    allureWriter(on, config);
    return config;
    },
    env: {
      allureReuseAfterSpec: true,
    },
    baseUrl: "http://localhost:3000",
    specPattern: "**/*.feature",
  },
  
});
