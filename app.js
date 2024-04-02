const fs = require("node:fs");

const readablestram = fs.createReadStream("text.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writablestream = fs.createWriteStream("text2.txt");

readablestram.on("data", (chunk) => {
  console.log(chunk);
  writablestream.write(chunk);
});
