import mongoose, { Document, Schema } from "mongoose";

export interface ILink extends Document {
  url: string;
  abridged: string;
}

const AbridgeSchema: Schema = new Schema({
  url: {
    type: String,
    required: true
  },
  abridged: {
    type: String,
    required: true
  }
});

export const Abridge = mongoose.model<ILink>("Abridge", AbridgeSchema);
