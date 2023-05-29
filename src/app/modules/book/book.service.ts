import { IBook } from "./book.interface";
import Books from "./book.model";

export const getBookByGenreFromDB = async (genre: string): Promise<IBook | {}> => {
    const Book = await Books.find({ genre: genre });
    return Book;
}

export const getBookByGenreAndPublisherFromDB = async (genre: string,publisher:string): Promise<IBook | {}> => {
    const Book = await Books.find({
        $and: [
            { genre: genre },
            { 'publisher.name': publisher },
        ],
    });
    return Book;
}
export  const getHighRateBookFromDB = async ()=> {
    const Book = await Books.getHighRateBooks();
    return Book;
}

export const updateBookPricesFromDB = async (): Promise<IBook | {}> => {
    const Book = await Books.updateMany(
        { publicationYear: { $gt: 2020 }, price: { $type: 'string' } },
        [{ $set: { price: { $toInt: '$price' } } }]
    );
    return Book;
}