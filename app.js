const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const name = "bharath";
  res.writeHead(200, { "contetx-Type": "text/html" });

  // fs.createReadStream("index.html").pipe(res);

  let html = fs.readFileSync("index.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
