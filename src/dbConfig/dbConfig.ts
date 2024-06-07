import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connnection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected!!!");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. please make sure MongoDb is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}
