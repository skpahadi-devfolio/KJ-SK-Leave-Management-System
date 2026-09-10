//Routes for Contact Form:-

import express from "express";
import { contactFormController } from "../controllers/contactController.js";
const router = express.Router();


router.post("/sendMessage", contactFormController);             //Route for Create form


export default router;