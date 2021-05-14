import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

import { Link } from "./models/link.model";
import { shrinkLink } from "./utils/shrinkLink";

const DB_ROW_LIMIT = 25;

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/link", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/links", async (_, res: Response) => {
  const link = await Link.find();
  res.json(link);
});

app.post("/api/shrink", async (req: Request, res: Response) => {
  await Link.create({ url: req.body.url, shrink: shrinkLink() });
  while (await Link.countDocuments() > DB_ROW_LIMIT) {
    await Link.findOneAndRemove();
  }
  res.redirect(307, "http://localhost:3000");
});

app.get("/:shrink", async (req: Request, res: Response) => {
  const shrink = await Link.findOne({ shrink: req.params.shrink });
  if (shrink == null) return res.sendStatus(404);
  res.redirect(shrink.url);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
