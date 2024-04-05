const http = require("node:http");
//to theread the workers
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.end("home page");
  } else if (req.url === "/slowpage") {
    const worker = new Worker("./workertheread.js");
    worker.on("message", (j) => {
      res.writeHead(200, { "content-Type": "text/plain" });
      res.end(`slow page ${j}`);
    });
  }
});

server.listen(8000, () => console.log("server runnng 8000"));
