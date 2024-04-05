const http = require("http");
const Server = http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "text-plain" });
  res.end("hello world");
});

const port = process.env.PORT || 3000;

Server.listen(port, () => console.log("server runng 3000"));
