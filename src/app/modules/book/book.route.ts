import { Router } from "express";
import { bookController } from "./book.controller";

const bookRoute = Router()
bookRoute.post('/' , bookController.createBook )
bookRoute.get('/' , bookController.getAllBook )
bookRoute.get('/:id' , bookController.getBookById )
bookRoute.patch('/:id' , bookController.updateBookById )
bookRoute.patch('/moveToTrash/:id' , bookController.moveToTrash )
bookRoute.patch('/restore/:id' , bookController.restoreBook )


export default bookRoute