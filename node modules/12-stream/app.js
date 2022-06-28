const fs = require("fs");

const data = [];

fs.createReadStream("./file.txt", {
  //한번에 얼마만큼의 데이터를 읽어올 것인가. default 64kbytes
  highWaterMark: 8,
  encoding: "utf-8",
  //calculate
})
  // .on("data", (chunk) => {
  //   data.push(chunk);
  // })
  .once("data", (chunk) => {
    data.push(chunk);
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", console.error);
