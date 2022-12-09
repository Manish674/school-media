import usecase from "../user_case/student.use_cases.js";

export default (dependencies) => {
  const { studentRepository } = dependencies.databaseService

  const createStudent = async (req, res, next) => {
    //initialize use case
    const { addStudent } = usecase(studentRepository);

    await addStudent(req.body).then((response) => {
      res.status(200).json({ success: true, user: response });
    }).catch((e) => {
      next(e)
    });

  };

  const getStudents = async (req, res, next) => {
    const { getStudents } = usecase(studentRepository);

    await getStudents().then((response) => {
      res.status(200).json({ success: true, students: response })
    }).catch((e) => next(e))
  }

  return {
    createStudent,
    getStudents
  }
}

