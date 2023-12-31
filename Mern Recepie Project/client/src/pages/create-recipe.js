import React, { useState } from "react"
import axios from "axios"
import { useGetUserID } from "../hooks/useGetUserID"
import {useNavigate} from "react-router-dom"
import { useCookies } from "react-cookie"

export const CreateRecipes = () => {
    const userID = useGetUserID()
    const [Cookies, _] = useCookies(["access_token"])
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: userID,
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target
        setRecipe({...recipe, [name] : value})
    }

    const handleIngredientChange = (event, index) => {
        const { value} = event.target
        const ingredients = recipe.ingredients
        ingredients[index] = value
        setRecipe({...recipe, ingredients })
        
    }

    const handleAddIngredient = () => {
        const ingredients = [...recipe.ingredients, ""]
        setRecipe({...recipe, ingredients})
    }

    const handleSubmit = async (event) => {
        try{
            await axios.post(
                "http://localhost:3001/recipes",
                {...recipe},
                {
                    headers: {authorization : Cookies.access_token}
                }
           )
           
        }
        catch(error){
            console.error(error)
        }
        alert("recipe added")
    }


    return(
        <div className="create-recipe">
            <h2>
                Create Recipe
            </h2>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <label htmlFor="ingredients"> Ingredients</label>
                {recipe.ingredients.map((ingredient, idx) =>(
                    <input key={idx} type="text" name="ingredient" value={ingredient} onChange={(event) => handleIngredientChange(event, idx)} />
                ))}
                <button  type="button" onClick={handleAddIngredient}>Add Ingredient</button>
                <label id="instructions">Instructions</label>
                <textarea id="instructions" name="instructions" value={recipe.instructions} onChange={handleChange}></textarea>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id="imageUrl" name="imageUrl" value={recipe.imageUrl} onChange={handleChange}/>
                <label htmlFor="cookingTime">Cooking Time(minutes)</label>
                <input type="number" id="cookingTime" name="cookingTime" value={recipe.cookingTime} onChange={handleChange}/>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    )
}