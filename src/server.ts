
import mongoose from 'mongoose';
import app from './app';

const port:number = 5000;

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/books-mongoose');
        console.log("Database Connect");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch (err){
        console.log("Failed to connect database",err);
    }
    
}
bootstrap()


