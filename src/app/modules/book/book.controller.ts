import { NextFunction, Request, Response } from "express";
import { getBookByGenreAndPublisherFromDB, getBookByGenreFromDB, getHighRateBookFromDB, updateBookPricesFromDB } from "./book.service";

export const getBookByGenre = async (req: Request, res: Response, next: NextFunction) => {
    const genre = req?.query?.genre as string;
    console.log(genre);
    const book = await getBookByGenreFromDB(genre);
    res.status(200).json({
        status: "success",
        data: book,
    })

};
export const getBookByGenreAndPublisher = async (req: Request, res: Response, next: NextFunction) => {
    const genre = req?.query?.genre as string;
    const publisher = req?.query?.publisher as string;
    console.log(genre,publisher);
    const book = await getBookByGenreAndPublisherFromDB(genre,publisher);
    res.status(200).json({
        status: "success",
        data: book,
    })

};
export const findHighRateBook = async (req: Request, res: Response, next: NextFunction) => {
    const book = await getHighRateBookFromDB();
    res.status(200).json({
        status: "success",
        data: book,
    })

};
export const updateBookPrices = async (req: Request, res: Response, next: NextFunction) => {
    const book = await updateBookPricesFromDB();
    res.status(200).json({
        status: "success",
        data: book,
    })

};
