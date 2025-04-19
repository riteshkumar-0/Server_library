import Book from "../model/book.model.js";
import asyncHandler from 'express-async-handler';

const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const popularBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const searchBooks = asyncHandler(async (req, res) => {

    const query = req.params.query;


    try {
        const books = await Book.find({
            $or: [
                { bookname: { $regex: query, $options: 'i' } },
                { authorname: { $regex: query, $options: 'i' } },
                { category: { $regex: query, $options: 'i' } }
            ],
        })
        console.log("Found books:", books);
        res.json(books);
    } catch (error) {
        console.error("Error searching for books:", error);
        res.status(500).json({ message: 'Error searching for books', error });
    }


});


export { getBook, getBookById, searchBooks, popularBook };