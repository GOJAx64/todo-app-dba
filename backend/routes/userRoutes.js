import { Router } from "express";
import { register, authenticate, confirm, forgotPassword, checkToken, newPassword, profile } from '../controllers/userController.js';
import checkAuth from "../middleware/checkAuth.js";

const router = Router();

//Creation, register and confirmation of users
router.post("/",                        register);
router.post("/login",                   authenticate);
router.get("/confirm/:token",           confirm);
router.post("/forgot_password",         forgotPassword);
router.get("/forgot_password/:token",   checkToken);
router.post("/forgot_password/:token",  newPassword);
router.get('/profile',      checkAuth,  profile);

export default router;