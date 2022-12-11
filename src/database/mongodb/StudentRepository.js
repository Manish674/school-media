import User from "../../entities/student.schema.js";

export default (function StudentRepository() {
  const student = User;

  const addSoftCopy = async (studentObj) => {
    try {
      const createdStudent = await student.create({
        student_name: studentObj.student_name,
        phone_no: studentObj.phone_no,
        isHardCopy: false,
      })

      return createdStudent;
    } catch (e) {
      throw new Error(`error occured in student repository \n ${e.message} `)
    }
  }

  const findStudent = async (fieldName, fieldData) => {
    try {
      const searchedStudent = await student.findOne({ fieldName, fieldData })

      if (!searchedStudent) {
        return
      }

      return searchedStudent;
    } catch (e) {
      throw new Error('error occured in studentRepository ')
    }
  }

  const updateStudent = async (studentObj, id) => {
    try {
      //TODO encrypt password before adding student to database
      const updatedStudent = await student.findOneAndUpdate({ _id: id }, {
        email: studentObj?.email,
        password: studentObj.password,
        is_verified: true,
        isHardCopy: true,
        inviteLink: 'expired'
      })

      return updatedStudent;
    } catch (e) {
      throw new Error('error occured in studentRepository ')
    }
  }

  return {
    addSoftCopy,
    // addHardCopy,
    findStudent,
    updateStudent
  }
})()
