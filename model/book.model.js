import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
 
    bookname:String,
    authorname:String,
    description: String,
    price: Number,
    category: String,
    image: String,
    Type:String,
    
    
});
const Book = mongoose.model("Book", bookSchema);
// export { bookSchema };

export default Book;