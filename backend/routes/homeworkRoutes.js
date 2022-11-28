import express from "express";
import checkAuth from '../middleware/checkAuth.js';
import { getHomeworks, newHomework, getHomework, editHomework, deleteHomework } from '../controllers/homeworkController.js';

const router = express.Router();

router.route('')
      .get(checkAuth, getHomeworks)
      .post(checkAuth, newHomework);

router.route('/:id')
      .get(checkAuth, getHomework)
      .put(checkAuth, editHomework)
      .delete(checkAuth, deleteHomework);

export default router;