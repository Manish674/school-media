import { Router } from "express"; 
import student from "./studentRoute.js";


const apiRouter = (dependencies) => {
  const router = Router('');

  const studentRouter = student(dependencies)

  router.use('/student', studentRouter);

  return router;
}

export default apiRouter; 
