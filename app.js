const fs = require("node:fs");

//reading file is syncronosly
console.log("first");
const text = fs.readFileSync("text.txt", "utf-8");
console.log(text);

//reading file async effective as its donesnt block the code
console.log("second");
fs.readFile("text.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log("third");

//hw to write content in the file

//sync way

fs.writeFileSync("greet.txt", "hello bharath");

//async way

fs.writeFile("greet.txt", " hello kumar", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});
