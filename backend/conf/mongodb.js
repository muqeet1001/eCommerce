import mongoose from "mongoose";

const connectDb = async () => {

    mongoose.connection.on("connected", () => {
        console.log("bro db is connect");
    });
    await mongoose.connect(`${process.env.MONGODB_URL}/eCommerce`);

}

export default connectDb;
