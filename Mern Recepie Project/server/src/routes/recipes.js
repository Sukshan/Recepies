import express from "express"
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { userModel } from "../models/Users.js";



const router = express.Router();

router.get("/", async (req, res) => {
    try{    
        const response = await RecipeModel.find({})
        res.json(response)
    }
    catch(err){
        res.json(err);
    }
})


router.post("/", async (req, res) => {
    const recipe = new RecipeModel(req.body)
    try{
        const response = await recipe.save()
        res.json(response)
    }
    catch(err){
        res.json(err)
    }
})


router.get("/savedRecipes/ids", async (req, res) => {
    try{
        const user= await userModel.findById(req.body.userID)
        res.json({savedRecipes: user?.savedRecipes})
    }
    catch(err){
        res.json(err)
    }
})


router.get("/savedRecipes", async (req, res) => {
    try{
        const user = await userModel.findById(req.body.userID)
        const savedRecipes= await RecipeModel.find({
            _id: {$in: user.savedRecipes}
        })
        res.json({savedRecipes})
    }
    catch{
        res.json(err)
    }
})


export{ router as recipesRouter }
