//Route for Employee:-
import express from "express";
import { createEmployee, deleteEmployee, fetchEmployee, updateEmployee } from "../controllers/employeeController.js";
import { AuthMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/auth/yourProfile", AuthMiddleware, fetchEmployee);         //Route for Get:-
router.post("/auth/createProfile", AuthMiddleware, createEmployee);            //Route for Create:-
router.put("/auth/updateProfile/:empId", AuthMiddleware, updateEmployee);      //Route for Update:-
router.delete("/auth/deleteProfile/:empId", AuthMiddleware, deleteEmployee);   //Route for delete:-


export default router;