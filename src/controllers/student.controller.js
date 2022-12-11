import usecase from "../user_case/student.use_cases.js";

export default (dependencies) => {
  const { StudentRepository } = dependencies.databaseService;

  //SOFT COPY CREATED BY ADMIN
  const createStudent = async (req, res, next) => {
    //initialize use case
    const { createStudentSoftCopy } = usecase(StudentRepository);

    await createStudentSoftCopy(req.body)
      .then((response) => {
        res.status(200).json({ success: true, user: response });
      })
      .catch((e) => {
        next(e);
      });
  };

  const createStudentHardCopy = async (req, res, next) => {
    const { id } = req.params;
    const { createStudentHardCopy } = usecase(StudentRepository);

    await createStudentHardCopy(req.body, id)
      .then((response) => {
        res.status(200).json({ success: true, user: response });
      })
      .catch((e) => next(e));
  };

  const getStudents = async (req, res, next) => {
    const { getStudents } = usecase(StudentRepository);

    await getStudents()
      .then((response) => {
        res.status(200).json({ success: true, students: response });
      })
      .catch((e) => next(e));
  };

  return {
    createStudent,
    createStudentHardCopy,
    getStudents,
  };
};
