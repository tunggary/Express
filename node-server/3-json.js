const http = require("http");
// const http2 = require('http2') //https
const data = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/course") {
    if (method === "GET") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(data));
    } else if (method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on("end", () => {
        const course = JSON.parse(Buffer.concat(body).toString());
        data.push(course);
        console.log(data);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(3000);
