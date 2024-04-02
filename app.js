const http = require("node:http");

const server = http.createServer((req, res) => {
  const superHero = {
    name: "bharath",
    age: "24",
    place: "bangalore",
  };
  res.writeHead(200, { "contetx-Type": "text/plain" });
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
