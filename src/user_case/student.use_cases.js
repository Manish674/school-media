export default (StudentRepository ,service) => {

  const createStudent = async (firstName, lastName, phone_no) => {
    //Todo validation
    return await StudentRepository.create({
      studentName: `${firstName} + ${lastName}`,
      phone_no
    })
  }

  const getStudents = async () => {
    return await StudentRepository.find()
  }

  return { createStudent, getStudents }
}
