//Route for Both Signup and Login:-

import express from "express";
import { loginUser, signupUser } from "../controllers/authController.js";
const router = express.Router();

router.post("/auth/signup", signupUser);          //Route for Signup
router.post("/auth/login", loginUser);           //Route for Login

export default router;