const fs = require("fs");

//모든 api는 3가지 이름 정의됨
//rename(..., callback(error, data))
//try { renameSync(...) } catch(e) {}
//promises.rename().then().catch()

try {
  fs.renameSync("./test.txt", "./test-new.txt");
} catch (err) {
  console.error(err);
}

fs.rename("./test-new.txt", "test.txt", (err) => {
  console.error(err);
});
console.log("async");

fs.promises.rename("./test.txt", "./test-new.txt").catch(console.error);
