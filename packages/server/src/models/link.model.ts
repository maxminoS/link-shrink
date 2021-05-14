import mongoose, { Document, Schema } from "mongoose";

export interface ILink extends Document {
  url: string;
  shrink: string;
}

const LinkSchema: Schema = new Schema({
  url: {
    type: String,
    required: true
  },
  shrink: {
    type: String,
    required: true
  }
});

export const Link = mongoose.model<ILink>("Link", LinkSchema);
