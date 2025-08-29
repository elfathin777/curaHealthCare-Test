const { defineConfig } = require("cypress");
const fs = require("fs-extra");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    video: true,                  
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    setupNodeEvents(on, config) {
      // sebelum run test, hapus screenshot & video lama
      on("before:run", async () => {
        fs.emptyDirSync("cypress/screenshots");
        fs.emptyDirSync("cypress/videos");
      });

      on("after:spec", (spec, results) => {
        if (results && results.video) {
          if (results.stats.failures === 0) {
            // Hapus video kalau semua test berhasil
            fs.unlinkSync(results.video);
          }
        }
      });
      return config;
    },
  },
});
