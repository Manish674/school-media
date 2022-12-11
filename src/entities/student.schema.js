import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  student_name: { typeof: String },
  email: { typeof: String, default: '' },
  phone_no: { typeof: Number  },
  password: { typeof: String },
  is_verified: { typeof: Boolean, default: false },
  isHardCopy: { typeof: Boolean, default: false },
  invite_link: { typeof: String },
  // invite_code: { typeof: String }
});

const student = mongoose.model("student", studentSchema);

export default student;
