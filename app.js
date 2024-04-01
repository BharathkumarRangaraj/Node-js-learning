const eventemiter = require("node:events");

emiter = new eventemiter();

emiter.on("ordering-pizza", (type, size) => {
  console.log(`${size} pizza is ordered with ${type}`);
});
emiter.on("ordering-pizza", (type, size) => {
  if (size === "large") {
    console.log("complentry is soda");
  }
});

emiter.emit("ordering-pizza", "mushroom", "large");
