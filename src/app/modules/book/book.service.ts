import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (payload: IBook) => {
  const res = await Book.create(payload);
  return res;
};

const getAllBookFromDB = async () => {
  const res = await Book.find();
  return res;
};

// get book by id from db

const getBookByIdFromDB = async (id: string) => {
  const res = await Book.findById(id);
  return res;
};

export const bookService = {
  createBook,
  getAllBookFromDB,
  getBookByIdFromDB,
};
