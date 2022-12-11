import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  student_name: { unique: true, type: String, required: true },
  email: { unique: true, type: String },
  phone_no: { type: Number },
  password: { type: String },
  is_verified: { type: Boolean, default: false },
  isHardCopy: { type: Boolean, default: false },
}, { strict: false });

const student = mongoose.model("student", studentSchema);

export default student;
