const https = require("node:https");

const max_calls = 5;
const start = Date.now();

for (let a = 0; a < max_calls; a++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${a + 1}`, Date.now() - start);
      });
    })
    .end();
}
