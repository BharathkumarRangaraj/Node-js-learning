const http = require("node:http");

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
