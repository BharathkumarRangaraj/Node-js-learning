const path = require("node:path");
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./batman.js"));

//path.join accept one or more str as arg- absolute path

console.log(path.join("folder1", "folder2", "index.js"));
// `/ from the / itwill take `
console.log(path.join("/folder1", "folder2", "index.js"));

//wll take // as root
console.log(path.join("/folder1", "//folder2", "index.js"));

//resolve resolves a sequnce path/path seg into absolute path
// if no / in the begin resolve will add /

console.log(path.join("folder1", "folder2", "index.js"));
// `/ from the / itwill take `
console.log(path.resolve("folder free", "/folderfkjnr", "folder2", "index.js"));
//wll take from // as absolute
console.log(path.resolve("/folder1", "//folder2", "index.js"));
