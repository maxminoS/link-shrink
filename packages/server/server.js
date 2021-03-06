import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { Abridge } from "./models/abridge.js";
import { shrinkLink } from "./utils/shrinkLink.js";

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/abridge", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/links", async (_, res) => {
  const abridged = await Abridge.find();
  res.json(abridged);
});

app.post("/api/abridge", async (req, res) => {
  await Abridge.create({ url: req.body.url, abridged: shrinkLink() });
  res.redirect(307, "http://localhost:3000");
});

app.get("/:abridged", async (req, res) => {
  const abridged = await Abridge.findOne({ abridged: req.params.abridged });
  if (abridged == null) return res.sendStatus(404);
  res.redirect(abridged.url);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
