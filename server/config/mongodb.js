import mongoose from "mongoose";
import 'dotenv/config';
const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}mern-auth`);

}

export default connectDB;