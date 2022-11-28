import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js';
import homeworksRoutes from './routes/homeworkRoutes.js';
import notesRoutes from './routes/noteRoutes.js';

const app = express()
app.use(express.json());
dotenv.config();
connectDB();

//Routing
app.use('/auth',      userRoutes);
app.use('/homeworks', homeworksRoutes);
app.use('/notes',     notesRoutes);

const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT,  () => {
  console.log(`Servidor en el puerto ${PORT}`);
});