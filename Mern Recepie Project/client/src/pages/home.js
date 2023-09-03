import { useEffect, useState } from "react";
import { recipesRouter } from "../../../server/src/routes/recipes";
export const Home = () => {
    const [recipe, setRecipes] = useState([])

    useEffect(() => {

        const fetchRecipe = async () => {
            try{
                const response = await axios.get("http://localhost:3001/recipes")
                setRecipes(response.data)
            }
            catch(err){
                console.error(err)
            }
        }
        fetchRecipe()

    }, [])
    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {recipesRouter.map((recipe) => (
                    <li key={recipe._id}>
                        <div>
                            <h2>
                                {recipe.name}
                            </h2>
                        </div>
                        <div>
                            <p>{recipe.instructions}</p>
                        </div>
                        <img src={recipe.imageUrl} alt= {recipe.name} />
                        <p> Cooking Time: {recipe.cookingTime} (minutes)</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}