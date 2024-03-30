const superhero = require("./superhero");
const batman = new superhero("batman");
console.log(batman.getName());
batman.setName("newbatman");
console.timeLog(batman.getName());

const superman = new superhero("rab");
console.log(superman.getName());
superman.setName("newsuperman");
console.timeLog(superman.getName());
