// validations/book.validation.ts

import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Book title is required"),
  author: z.string().min(1, "Author name is required"),
  genre: z.string().min(1, "Genre is required"),
  category: z.string().min(1, "Category is required"),
  language: z.string().min(1, "Language is required"),
  price: z.number().nonnegative({ message: "Price must be 0 or more" }),
  stock: z.number().int().nonnegative({ message: "Stock must be 0 or more" }),
  type: z.enum(["physical", "ebook"]),

  // Optional fields
  edition: z.string().optional(),
  publisher: z.string().optional(),
  country: z.string().optional(),
  weightKg: z.number().positive().optional(),
  numberOfPages: z.number().int().positive().optional(),
  description: z.string().optional(),
  coverUrl: z.string().url("Cover image must be a valid URL").optional(),
  isLocked: z.boolean().optional(),
  locationId: z.string().optional(), // For books available in library locations

  // createdAt & updatedAt will be handled by the database
});
