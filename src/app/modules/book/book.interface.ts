import { HydratedDocument, Model } from "mongoose";

export interface IBook {
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
    rating: number;
    price: number;
    publisher: {
        name: string;
        location: string;
    };
    reviews: {
        username: string;
        comment: string;
    }[];
}

export interface BookModel extends Model<IBook,{}>{
    getHighRateBooks(): Promise<HydratedDocument<IBook>>;
}