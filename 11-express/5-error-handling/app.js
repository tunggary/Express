import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {
  // 1. 비동기
  // error는 내부적으로 작동하기 때문에 아무리 try catch로 잡으려 해도 안됨
  // 마지막에 모든 경로를 받는 error 처리도 동기로 처리될때만 처리됨
  // fs.readFile('/file1.txt', (err, data) => {
  //   if (err) {
  //     res.sendStatus(404);
  //   }
  // });

  // 2. 동기
  try {
    const data = fs.readFileSync("/file1.txt");
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get("/file2", (req, res) => {
  // 3. promise 비동기
  // 내부적으로 발생한 error를 다음 미들웨어로 넘김 => 결국 마지막 error처리 미들웨어(use)에서 걸림
  // fsAsync
  //   .readFile("/file2.txt") //
  //   .catch((error) => {
  //     next(catch)
  //   });

  // 자체적으로 error 처리
  fsAsync
    .readFile("/file2.txt") //
    .catch((error) => {
      res.sendStatus(404);
    });
});

app.get("/file3", async (req, res) => {
  // 4. async
  // await가 있는 줄 자체는 동기, 따라서 파일을 읽은 후 data에 저장
  // 하지만 마지막 error처리 미들웨어에는 걸리지 않음, 미들웨어 자체는 비동기 이기 때문에
  try {
    const data = await fsAsync.readFile("/file2.txt");
  } catch {
    res.sendStatus(404);
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
