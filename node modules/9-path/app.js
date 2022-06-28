//운영체제 별로 경로 구분자, 경로의 표기법등이 다를 수 있음으로 메서드를 이용해서 경로를 작성하자
const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log("isAbsolute", path.isAbsolute(__dirname));
console.log("isAbsolute", path.isAbsolute("../"));

//normalize
console.log(path.normalize("./folder//////////sub"));

//join
console.log(__dirname + "/" + "image"); //윈도우에서는 이상한 경로가 됨
console.log(path.join(__dirname, "image"));
