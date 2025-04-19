import mongoose from "mongoose";


const bookrequestSchema = new mongoose.Schema({
  bookName: String,
  authorName: String,
  category: String,
  image: String,
});

const Bookrequest = mongoose.model('Bookrequest', bookrequestSchema);


const articleSchema = new mongoose.Schema({
  title: String,
  publisher: String,
  category: String,
});

const Article = mongoose.model('Article', articleSchema);

const magazineSchema = new mongoose.Schema({
  magazinename: String,
  publishercompany: String,
  category: String,
  image: String,
});

const Magazine = mongoose.model('Magazine', magazineSchema);

export { Bookrequest, Article, Magazine };