const buffer = new Buffer.from("bharath");
buffer.write("hey");
console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());
