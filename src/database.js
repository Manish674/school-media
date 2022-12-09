import mongoose from "mongoose";

export async function connect() {
  const url = "mongodb://0.0.0.0:27017";
  const client = await mongoose.connect(url);
  return client;
}
