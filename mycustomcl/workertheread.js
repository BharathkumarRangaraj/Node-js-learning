//to pass value from here to parent;
const { parentPort } = require("node:worker_threads");
let j = 0;
for (let index = 0; index < 9000000000; index++) {
  j++;
}
parentPort.postMessage(j);
