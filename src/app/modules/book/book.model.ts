import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    category: { type: String, required: true },
    language: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    type: { type: String, enum: ["physical", "ebook"], required: true },

    edition: { type: String },
    publisher: { type: String },
    country: { type: String },
    weightKg: { type: Number },
    numberOfPages: { type: Number },
    description: { type: String },
    coverUrl: { type: String },
    isLocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    locationId: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Book = model<IBook>("Book", bookSchema);
