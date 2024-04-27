import { Router } from "express";
import * as examController from '../controllers/examController.js';
const examrouter = Router();

// exam

examrouter.route('/exams').get(examController.getAllExam);//get all exam name and their logo
examrouter.route('/exams/:id').get(examController.getExamById);
examrouter.route('/createExams').post(examController.createExam);
examrouter.route('/categoryExams').post(examController.createExams);
examrouter.route('/updateExams/:id').put(examController.updateExams);
examrouter.route('/deletedExams/:id').delete(examController.deleteExam);

export default examrouter;