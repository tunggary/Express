const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}, 0);

//현재 수행할 것은 아니지만, call stack에 있는 코드가 완료된 다음에 내가 등록한 callback함수를 task queue에  가장 먼저 넣어달라고 요청
process.nextTick(() => {
  console.log("nexttick");
});

for (let i = 0; i < 100000; i++) {
  console.log("for loop");
}

//출력이 되는 순서 설명
//setTimeout의 callback이 event loop에 의해서 task queue에 들어감
//nextTick 메서드에 의해서 nextTick의 callback이 task queue의 앞에 가장 먼저 들어감(setTimeout의 callback보다 먼저)
//event loop는 call stack의 코드를 처리하고(for 문) task queue에 앞에 있는 nextTick의 callback을 call stack으로 가져와 처리
//그 다음 setTimeout의 callback을 call stack으로 가져와 처리
