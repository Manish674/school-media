import mongoose from "mongoose"
import StudentRepository from "./StudentRepository.js";

const database = () => {
  const connect = async () => {
    const url = "mongodb://0.0.0.0:27017";
    const client = await mongoose.connect(url);
    return client;
  }

  return { connect, StudentRepository }

}

export default database;

// export default class database {

// }
