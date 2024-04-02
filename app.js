const fs = require("node:fs");
const zlib = require("node:zlib");

const gzib = zlib.createGzip();
const readablestram = fs.createReadStream("text.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writablestream = fs.createWriteStream("text2.txt.gz");

// readablestram.on("data", (chunk) => {
//   console.log(chunk);
//   writablestream.write(chunk);
// });
readablestram.pipe(writablestream);
readablestram.pipe(gzib).pipe(fs.WriteStream("text2.txt"));
