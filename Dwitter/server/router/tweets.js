import express from "express";
import "express-async-errors";

let tweets = [
  {
    id: "1",
    text: "express 화이팅",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "https://buffer.com/library/content/images/size/w1000/2022/03/sigmund-MQ2xYBHImKM-unsplash--1--1.jpg",
  },
  {
    id: "2",
    text: "안녕",
    createdAt: Date.now().toString(),
    name: "Ellie",
    username: "ellie",
    url: "https://buffer.com/library/content/images/size/w1000/2022/03/sigmund-MQ2xYBHImKM-unsplash--1--1.jpg",
  },
];
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username ? tweets.filter((tweet) => tweet.username == username) : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id == id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST /tweets
router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id == id);
  if (tweet) {
    // find로 찾은 후, 찾은 객체의 값을 변경하면 원본 변경됨
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id != id);
  res.sendStatus(204);
});

export default router;
