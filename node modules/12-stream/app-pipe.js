const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done");
});

// const readStream = fs.createReadStream("./file.txt");
// const writeStream = fs.createWriteStream("./file4.txt");
// const piping = readStream.pipe(writeStream);
// piping.on("finish", () => {
//   console.log("done");
// });

const http = require("http");
const server = http.createServer((req, res) => {
  //file.txt를 다 읽고 response로 넘겨줌
  // fs.readFile("file.txt", (err, data) => {
  //   res.end(data);
  // });

  //buffer 단위로 쪼개서 stream으로 보내줌
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);
