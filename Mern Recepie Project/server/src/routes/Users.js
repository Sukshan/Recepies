import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { userModel } from "../models/Users.js"


const router = express.Router()

router.post("/register", async(req, res) =>{
    const {username, password} = req.body

    const user = await userModel.findOne({username});


    if (user){
        return res.json({message: "user already exists!"})
    }

    const hashedPassword = await bcrypt.hash(password, 10) 
    const newUser = new userModel({username, password: hashedPassword})
    await newUser.save()
    res.json({message: "user registration successful !"});
})
router.post("/login")



export {router as userRouter }