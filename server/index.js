import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));// It's used to parse the incoming data of HTTP requests with content type "application/json".
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user',userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNCTION_URL,{useNewUrlParser: true})
.then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));





