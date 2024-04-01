// const eventemiter = require("node:events");

// emiter = new eventemiter();

// emiter.on("ordering-pizza", (type, size) => {
//   console.log(`${size} pizza is ordered with ${type}`);
// });
// emiter.on("ordering-pizza", (type, size) => {
//   if (size === "large") {
//     console.log("complentry is soda");
//   }
// });

// emiter.emit("ordering-pizza", "mushroom", "large");

const Pizzashop = require("./pizzashop");
const DrinkMachine = require("./drink");

const pizzashop = new Pizzashop();
const DrinkMachines = new DrinkMachine();
pizzashop.on("order", (size, topping) => {
  console.log(`order reveived is ${size} and ${topping}`);
  DrinkMachines.serveDrink(size);
});
pizzashop.order("large", "mush");
pizzashop.displayordernum();
