import mongoose from "mongoose";

const dbConnect = async () => {
  const ConnectionString = process.env.MONGODB_URI;
  try {
    const connectionLog = await mongoose.connect(ConnectionString);
    //what is inside this conn
    console.log(`MongoDB connected: ${connectionLog.connection.host}`);
  } catch (error) {
    console.log("Failed to connect db", error);
  }
};

export default dbConnect;
