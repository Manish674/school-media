import mongoose from "mongoose"
import User from "../../entities/student.schema.js";

const database = () => {
  const connect = async () => {
    const url = "mongodb://0.0.0.0:27017";
    const client = await mongoose.connect(url);
    return client;
  }

  const studentRepository = User;

  return { connect, studentRepository }

}

export default database;
