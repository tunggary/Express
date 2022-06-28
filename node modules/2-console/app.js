const { futimes } = require("fs");

//log level (심각성에 따라 level별로 다르게 사용)
console.log("log..."); //개발
console.info("info"); //중요한 정보를 남길때
console.warn("warn"); //경고
console.error("error"); //심각한 에러, 사용자 에러, 시스템 에러

//assert (False일때만 출력)
console.assert(2 === 3, "not same");
console.assert(2 === 2, "same");

//print object
const student = { name: "sungyoon", age: 26, company: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2 });

//measuring time
console.time("for loop");
for (let i = 0; i <= 10000; i++) {
  i++;
}
console.timeEnd("for loop");

//counting
function a() {
  console.count("a function");
}
a();
a();
console.countReset("a function");
a();

//trace
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  console.trace();
}
f1();
