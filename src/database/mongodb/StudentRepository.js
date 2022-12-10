import User from "../../entities/student.schema.js";

export default (function StudentRepository() {
  const student = User;

  const addSoftCopy = async (studentObj) => {
    try {
      await student.create({
        student_name: studentObj.student_name,
        phone_no: studentObj.phone_no
      })
    } catch (e) {
      throw new Error(`error occured in student repository \n ${e.message} `)
    }

    return studentObj;
  }

  const findStudent = async (fieldName, fieldData) => {
    try {
      const searchedStudent = await student.findOne({ fieldName, fieldData })
      return searchedStudent;
    } catch (e) {
      throw new Error('error occured in studentRepository ')
    }
  }

  const addHardCopy = async () => {
  }

  return {
    addSoftCopy,
    addHardCopy,
    findStudent,
  }
})()
