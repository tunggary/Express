// Fixed-size chunk of memoty
// array of integers, byte of data

//실제 메모리에 올라갈때 "hi"
const buf = Buffer.from("hi");
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast 하지만 초기화 안됨

console.log(buf2);
console.log(buf3);

buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());

buf2.copy(buf3);
console.log(buf3.toString());

const buf4 = Buffer.concat([buf, buf2, buf3]);
console.log(buf4.toString());
