import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to mongodb successfuly");
  } catch (error) {
    console.log(`error is ${error.message}`);
  }
};

export default connectDB;
