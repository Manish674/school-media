export default (StudentRepository, service) => {
  // Creating user by admin
  const createStudentSoftCopy = async (studentInstance) => {
    const { student_name, phone_no } = studentInstance;

    // StudentRepository.find
    const student = await StudentRepository.findStudent({ phone_no });

    if (student) {
      return 'User already exists with these details'
    }

    //TODO create invite link
    const newStudent = await StudentRepository.addSoftCopy({
      student_name,
      phone_no,
    });

    const inviteLink = `/add/:${newStudent._id}`

    return {
      student: newStudent,
      inviteLink: inviteLink,
    };
  };

  const createStudentHardCopy = async (studentInstance, id) => {
    //find the user
    const student = await StudentRepository.findStudent('_id', id);
    
    if (!student) {
      return "You are not invited yet.";
    }

    if (student.isHardCopy === true) {
      return "Invite Link has already been expired"
    }

    //TODO encrypt password
    //if user exists createHardCopy (confirm user)
    const updatedStudent = await StudentRepository.updateStudent(
      studentInstance,
      id
    );

    return updatedStudent;
  };

  const getStudents = async () => {
    console.log("what is this", StudentRepository);

    return "great";
  };

  return { createStudentSoftCopy, getStudents, createStudentHardCopy };
};
