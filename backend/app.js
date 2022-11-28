import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js';
import homeworksRoutes from './routes/homeworkRoutes.js';
import notesRoutes from './routes/noteRoutes.js';

const app = express()
app.use(express.json());
dotenv.config();
connectDB();

//Cors
const whiteList = ['http://127.0.0.1:5173'];

const corsOptions = {
  origin: function(origin, callback) {
    if(whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback( new Error('Error de CORS') );
    }
  }
}

app.use(cors(corsOptions));

//Routing
app.use('/api/auth',      userRoutes);
app.use('/api/homeworks', homeworksRoutes);
app.use('/api/notes',     notesRoutes);

const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT,  () => {
  console.log(`Servidor en el puerto ${PORT}`);
});