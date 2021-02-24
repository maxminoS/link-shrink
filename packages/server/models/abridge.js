import mongoose from "mongoose";
import { shrinkLink } from "../utils/shrinkLink.js";

const abridgeSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  abridged: {
    type: String,
    required: true,
    default: shrinkLink()
  }
});

export const Abridge = mongoose.model("Abridge", abridgeSchema);
