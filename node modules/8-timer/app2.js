console.log("code 1");

console.time("timeout 0");
setTimeout(() => {
  //정확히 0초가 아닌이유: call stack이 비어야 setTimeout의 callback을 task queue에서 call stack으로 가져와서 실행할 수 있음
  console.timeEnd("timeout 0");
  console.log("setTimeout 0");
}, 0);

for (let i = 0; i < 1000; i++) {}

console.log("code 2");
setImmediate(() => {
  console.log("setImmediate");
});

console.log("code 3");
process.nextTick(() => {
  console.log("nextTick");
});
