import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModel } from "../models/Users.js"


const router = express.Router()

router.post("/register", async(req, res) =>{
    const {username, passoword} = req.body

    const user = await UserModel.findOne({username});

    res.json(user);
})
router.post("/login")





export {router as UserRouter }