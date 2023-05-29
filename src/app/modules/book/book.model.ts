import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

const bookSchema: Schema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    publisher: {
        name: { type: String, required: true },
        location: { type: String, required: true },
    },
    reviews: [
        {
            username: { type: String, required: true },
            comment: { type: String, required: true },
        },
    ],
});
bookSchema.static("getHighRateBooks",async function getHighRateBooks():Promise<IBook[]> {
    const book = await this.find({ rating: { $gte: 4.5 } });
    return book;
})


const Books = model<IBook,BookModel>('Book', bookSchema);

export default Books;