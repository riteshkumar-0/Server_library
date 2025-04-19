import express from 'express';
import { createBookRequest, createArticle, createMagazine } from '../controller/bookrequest.controller.js';
import upload from '../Multer/multer.js';

const router = express.Router();

router.post('/bookrequest', upload.single('image'), createBookRequest);
router.post('/article', createArticle);
router.post('/magazine', upload.single('image'), createMagazine);

export default router;