import express from "express";
import cors from "cors"
import mongoose from "mongoose"  
// mongoose is an orm for mongodb
import { userRouter } from "./routes/Users.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter) 


//accessing the mongodb password from .env file
const mongodbPassword = process.env.MONGODB_PASSWORD

mongoose.connect(`mongodb+srv://sikandarsher4:${mongodbPassword}@recepies.8oaaxkb.mongodb.net/Recepies?retryWrites=true&w=majority`)

app.listen(3001, ()=> console.log("server started!!!"))