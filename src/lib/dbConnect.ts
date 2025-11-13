import mongoose from "mongoose";

export type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

export async function dbConnect() {
  if (connection.isConnected) {
    console.log("DataBase is already Connected");
  }
  try {
    const connectionString = String(process.env.MONGO_URI) || "";
    const client = await mongoose.connect(connectionString);
    connection.isConnected = client.connections[0].readyState;
    console.log(mongoose.connection.name + " Database is Connected");
  } catch (error) {
    console.log("error in connecting database", error);
  }
}
