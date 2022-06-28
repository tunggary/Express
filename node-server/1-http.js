const http = require("http");
const fs = require("fs");
// const http2 = require('http2') //https

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/course") {
    fs.createReadStream("./html/course.html").pipe(res);
  } else {
    res.write("Not found");
    res.end();
  }
});

server.listen(3000);
