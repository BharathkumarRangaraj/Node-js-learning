const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.end("home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.end("about page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "content-Type": "application/json" });
    res.end(
      JSON.stringify({
        name: "bharath",
        age: "24",
      })
    );
  } else {
    res.writeHead(404);
    res.end("page not found");
  }
  // res.end(req.url);
  // res.writeHead(200, { "contetx-Type": "text/html" });

  // fs.createReadStream("index.html").pipe(res);

  //for dynamic name change in html file
  // let html = fs.readFileSync("index.html", "utf-8");
  // html = html.replace("{{name}}", name);
  // res.end(html);
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
