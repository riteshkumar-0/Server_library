import mongoose from "mongoose";


const listSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    books: [ { type: mongoose.Schema.Types.ObjectId, ref: "Book" } ]
});

const List = mongoose.model("List", listSchema);
// export { listSchema };
export default List;