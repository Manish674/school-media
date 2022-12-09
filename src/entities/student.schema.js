import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentname: { typeof: String },
  email: { typeof: String },
  phone_no: { typeof: Number },
  password: { typeof: String },
  is_verified: { typeof: Boolean },
  invite_link: { typeof: String },
  invite_code: { typeof: String }
});

const student = mongoose.model("student", studentSchema);

export default student;
