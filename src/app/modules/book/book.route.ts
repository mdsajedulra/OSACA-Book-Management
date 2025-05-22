import { Router } from "express";
import { bookController } from "./book.controller";

const bookRoute = Router()
bookRoute.post('/' , bookController.createBook )
bookRoute.get('/' , bookController.getAllBook )
bookRoute.get('/:id' , bookController.getBookById )


export default bookRoute