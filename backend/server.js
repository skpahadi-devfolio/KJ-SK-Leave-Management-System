import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import managerRoutes from "./routes/managerRoutes.js";
import employeeLeaveRoutes from "./routes/Leave/employeeLeaveRoutes.js";
import managerLeaveRoutes from "./routes/Leave/managerLeaveRoutes.js";
import managerHistroyRoutes from "./routes/History/managerHistoryRoutes.js";
const app = express()
const port = 3000

app.use(express.json());

app.use(cors());   //Allow diffenet orgins

connectDB();      //Database connection 


//ALl Routes:-
app.use("/api", authRoutes);               //Route for authentication
app.use("/api", contactRoutes);           //Route for contact form
app.use("/api", employeeRoutes);          //Route for Employee
app.use("/api", managerRoutes);          //Route for Manager

//Leaves routes section:-
app.use("/api", employeeLeaveRoutes);    //Route for Employee leave
app.use("/api", managerLeaveRoutes);    //Route for Manager leave


//LeaveHistory routes section:-
app.use("/api", managerHistroyRoutes);   //Route from Manager Leave History


app.get('/', (req, res) => {
  res.send('Hello Backend Running on Express Server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})