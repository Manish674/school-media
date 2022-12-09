import { Router } from "express";
import studentController from "../controllers/student.controller.js"


const studentRouter = (dependencies) => {
  const router = Router();

  const controller = studentController(dependencies);

  router.route('/').get(controller.getStudents)

  return router
}

export default studentRouter;
