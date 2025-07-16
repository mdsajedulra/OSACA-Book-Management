import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (payload: IBook) => {
  const res = await Book.create(payload);
  return res;
};

const getAllBookFromDB = async () => {
  const res = await Book.find({ isDeleted: false });
  return res;
};

// get book by id from db

const getBookByIdFromDB = async (id: string) => {
  const res = await Book.findById(id);
  return res;
};

// Update book by id in db
const updateBookByIdInDB = async (id: string, payload: Partial<IBook>) => {
  const res = await Book.findByIdAndUpdate(id, payload, { new: true });
  return res;
};

// move to trash
const moveToTrash = async (id: string) => {
  console.log(id);
  const res = await Book.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return res;
};

// restore book
const restoreBook = async (id: string) => {
  const res = await Book.findByIdAndUpdate(
    id,
    { isDeleted: false },
    { new: true }
  );
  return res;
};

export const bookService = {
  createBook,
  getAllBookFromDB,
  getBookByIdFromDB,
  moveToTrash,
  restoreBook,
  updateBookByIdInDB,
};
