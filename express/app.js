import express from "express";
const app = express();

// app.get("/sky/:id", (req, res, next) => {
//   // console.log(req.path);
//   // console.log(req.headers);
//   console.log(req.params.id);
//   console.log(req.query);

//   // res.json({ name: req.params.id });
//   res.setHeader("key", "setheader");
//   res.status(201).send("created");
// });

//all vs use
//all : 어떤 method인지 상관없이 경로가 path인 경우에만 반응
//use : 어떤 method인지 상관없이, 경로가 path2로 시작하면 반응
//all을 use처럼 사용하려면 경로 /path/* 이런식으로 해줘야함
app.all("/path", (req, res, next) => {
  console.log("all");
  next();
});

app.use("/path2", (req, res, next) => {
  console.log("use");
  next();
});

//미들웨어는 순서 중요, 처음 일치된 경로에서 res하면 뒤에거는 호출x
app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    // next();
    // next("route");
    // next(new Error("error"));

    //하나의 미들웨어에서 send를 두번 할 수 없음, 따라서 send를 하고 return 하는것이 좋음
    return res.send("Hello");
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

//모든 post method에 대해서 json을 읽을 수 있게 해줌
app.use(express.json());

app.post("/", (req, res, next) => {
  console.log(req.body);
});

//일치된 경로가 없을때
app.use((req, res, next) => {
  res.status(404).send("Not available");
});

//error 메세지를 받았을때
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later!");
});
app.listen(8080);
