import express from 'express';
import { findHighRateBook, getBookByGenre, getBookByGenreAndPublisher, updateBookPrices } from './book.controller';

const router = express.Router()

router.get('/genre', getBookByGenre) //query genre
router.get('/genreandpublisher', getBookByGenreAndPublisher)//query genre and publisher
router.get('/topratebook', findHighRateBook) //it's static method using 
router.get('/updateprice', updateBookPrices)//it update document


export default router;