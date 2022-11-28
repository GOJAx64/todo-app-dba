import express from "express";
import checkAuth from '../middleware/checkAuth.js';
import { getNotes, newNote, getNote, editNote, deleteNote } from '../controllers/noteController.js';

const router = express.Router();

router.route('')
      .get(checkAuth, getNotes)
      .post(checkAuth, newNote);

router.route('/:id')
      .get(checkAuth, getNote)
      .put(checkAuth, editNote)
      .delete(checkAuth, deleteNote);

export default router;