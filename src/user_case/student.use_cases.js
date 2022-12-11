export default (StudentRepository, service) => {

  // Creating user by admin
  const createStudentSoftCopy = async (studentInstance) => {
    const { student_name, phone_no } = studentInstance;

    const newStudent = await StudentRepository.addSoftCopy({ student_name, phone_no })

    return newStudent;
  }

  const createStudentHardCopy = async (studentInstance, id) => {
    //find the user
    const student = await StudentRepository.findStudent({ _id: id })

    if (!student) {
      return 'User does not exits'
    }

    //if user exists createHardCopy (confirm user) 
    const updatedStudent = await StudentRepository.updateStudent(studentInstance, id)
    
    //send invalid request
    return updatedStudent; 
  }

  const getStudents = async () => {
    console.log('what is this', StudentRepository)
    return 'great'
  }


  return { createStudentSoftCopy, getStudents, createStudentHardCopy }
}
