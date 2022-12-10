import { Router } from "express";
import studentController from "../controllers/student.controller.js"


const studentRouter = (dependencies) => {
  const router = Router();

  const controller = studentController(dependencies);

  router.route('/').get(controller.getStudents)
  router.route('/add').post(controller.createStudent)

  return router
}

export default studentRouter;
