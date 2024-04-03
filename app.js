const crypto = require("node:crypto");
const start = Date.now();

//sync way
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash", Date.now() - start);

//async way;
//run in libuv thread pool

const max_calls = 5;

for (let a = 0; a <= max_calls; a++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`hash: ${a + 1}`, Date.now() - start);
  });
}
