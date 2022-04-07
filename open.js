const open = require("open");

(async () => {
  await open(`file:///${__dirname}/index.html`, {
    app: ["google chrome", "--incognito"]
  });
})();
