const eventemiter = require("node:events");

class Pizzashop extends eventemiter {
  constructor() {
    super();
    this.ordernumber = 0;
  }
  order(size, topping) {
    this.ordernumber++;
    this.emit("order", size, topping);
  }
  displayordernum() {
    console.log(` the order number is ${this.ordernumber}`);
  }
}
module.exports = Pizzashop;
