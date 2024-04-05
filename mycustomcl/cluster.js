//to create cluster,fork
const cluster = require("node:cluster");
const http = require("node:http");
//to checck how may fork we can crete
const os = require("node:os");

console.log(os.cpus().length);
if (cluster.isMaster) {
  console.log(`master ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  console.log(`workers ${process.pid} is running`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "content-Type": "text/plain" });
      res.end("home page");
    } else if (req.url === "/slowpage") {
      for (let index = 0; index < 9000000000; index++) {}
      res.writeHead(200, { "content-Type": "text/plain" });
      res.end("slow page");
    }
  });

  server.listen(8000, () => console.log("server runnng 8000"));
}
