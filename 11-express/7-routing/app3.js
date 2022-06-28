import express from "express";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";

const app = express();

app.use(express.json()); //REST API -> body
app.use(express.urlencoded({ extended: false })); // HTML Form -> body

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(8080);
