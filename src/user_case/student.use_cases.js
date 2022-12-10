export default (StudentRepository, service) => {

  // Creating user by admin
  const createStudentSoftCopy = async (studentInstance) => {
    console.log('student usecase', studentInstance);
    const { student_name, phone_no } = studentInstance;

    const newStudent = await StudentRepository.addSoftCopy({ student_name, phone_no })

    return newStudent;
  }

  const getStudents = async () => {
    console.log('what is this', StudentRepository)
    return 'great'
  }

  return { createStudentSoftCopy, getStudents }
}
