import express from "express";
import { getBook, getBookById, searchBooks, popularBook } from "../controller/book.controller.js";

const router = express.Router();

router.get('/', getBook);
router.get('/popular', popularBook);
router.get('/:id', getBookById);
router.get('/search/:query', searchBooks);


export default router;