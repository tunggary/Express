const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("first-callback - ", args);
};

const callback2 = (args) => {
  console.log("second-callback - ", args);
};

emitter.on("sungyoon", callback1);

emitter.on("sungyoon", callback2);

//emit => event를 발생시켜줌
emitter.emit("sungyoon", { message: 1 });
emitter.emit("sungyoon", { message: 2 });

//event의 callback을 지울 수 있음
// emitter.removeListener("sungyoon", callback1);
emitter.removeAllListeners("sungyoon");
emitter.emit("sungyoon", { message: 3 });
