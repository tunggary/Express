const fs = require("fs").promises;

//비동기 방식이라 코드 순서대로 안될 수 있음

// read a file
fs.readFile("./test.txt", "utf-8") //
  .then((data) => console.log(data))
  .catch(console.error);

//write a file
fs.writeFile("./test.txt", "Hello sungyoon") //
  .catch(console.error);

//append a file
fs.appendFile("./test.txt", "Hello sungyoon") //
  .catch(console.error);

//copy
fs.copyFile("./test.txt", "./test2.txt") //
  .catch(console.error);

//folder
fs.mkdir("sub-folder") //
  .catch(console.error);

//read file name
fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
