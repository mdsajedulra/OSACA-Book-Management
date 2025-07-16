import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bookService } from "./book.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await bookService.createBook(payload);

  sendResponse(res, {
    data: result,
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book Created Successfully",
  });
});

// get all book

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.getAllBookFromDB();

  sendResponse(res, {
    data: result,
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book Created Successfully",
  });
});

// get Book By Id

const getBookById = catchAsync(async (req: Request, res: Response) => {
  const { id: objectId } = req.params;

  const result = await bookService.getBookByIdFromDB(objectId);

  sendResponse(res, {
    data: result,
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book Created Successfully",
  });
});

// Update Book By Id

const updateBookById = catchAsync(async (req: Request, res: Response) => {
  const { id: objectId } = req.params;
  const payload = req.body;

  const result = await bookService.updateBookByIdInDB(objectId, payload);

  sendResponse(res, {
    data: result,
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book updated successfully",
  });
});

// move to trash

const moveToTrash = catchAsync(async (req: Request, res: Response) => {
  const { id: objectId } = req.params;

  const result = await bookService.moveToTrash(objectId);

  sendResponse(res, {
    data: result,
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book moved to trash successfully",
  });
});

// restore book
const restoreBook = catchAsync(async (req: Request, res: Response) => {
  const { id: objectId } = req.params;

  const result = await bookService.restoreBook(objectId);

  sendResponse(res, {
    data: result,
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book restored successfully",
  });
});

export const bookController = {
  getAllBook,
  createBook,
  getBookById,
  moveToTrash,
  restoreBook, 
  updateBookById
};
