import express from 'express';
import { loginUser, registerUser,getUser } from '../controllers/userController.js';
import requireAuth from '../middleware/requireAuth.js';
const router = express.Router();

router.post("/loginUser",loginUser);
router.post("/registerUser",registerUser);
router.get("/getUser", requireAuth, getUser)

export default router;