import mongoose from "mongoose";

const abridgeSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  abridged: {
    type: String,
    required: true
  }
});

export const Abridge = mongoose.model("Abridge", abridgeSchema);
