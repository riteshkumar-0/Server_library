import { Bookrequest, Article, Magazine } from "../model/request.model.js";

// Controller for handling book requests
export const createBookRequest = async (req, res) => {
  const { bookName, authorName, category } = req.body;
  const image = req.file ? req.file.path : '';
  const bookrequest = new Bookrequest({ bookName, authorName, category, image });

  try {
    const savedRequest = await bookrequest.save();
    res.status(201).json(savedRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller for handling articles
export const createArticle = async (req, res) => {
  const { title, publisher, category } = req.body;
  const article = new Article({ title, publisher, category });

  try {
    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller for handling magazines
export const createMagazine = async (req, res) => {
  const { magazinename, publishercompany, category } = req.body;
  const image = req.file ? req.file.path : '';
  const magazine = new Magazine({ magazinename, publishercompany, category, image });

  try {
    const savedMagazine = await magazine.save();
    res.status(201).json(savedMagazine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};