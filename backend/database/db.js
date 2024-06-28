import mongoose from "mongoose"; //ODM it will act between our Nodejs and mongoDB
import dotenv from "dotenv";
dotenv.config();

const DBConnection = async () => {
  const MONGO_URI = process.env.MONGODB_URL;
  try {
    await mongoose.connect(MONGO_URI); //mongoose is helping us to connect with mongoDb
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
