import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (_, res) => {
  res.send("test");
});

app.listen(port);
