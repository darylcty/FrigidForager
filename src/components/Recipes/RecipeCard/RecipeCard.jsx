import { useState, useEffect } from "react";
import "./RecipeCard.css";
import { useParams } from "react-router-dom";

export default function RecipeCard({ selectedRecipe }) {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`
      const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "37288580d1374726b9bee81a8cfca5c2"
        },
      });
      const data = await response.json();
      setRecipeDetails(data);
    }
    fetchRecipe();
  }, [id]);

  return (
    <div className="recipe-detail">
      <h2>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <p>Ready in: {recipeDetails.readyInMinutes} minutes</p>
      <p>Serves: {recipeDetails.servings}</p>

      {/* ... more fields ... */}
      <h3>Ingredients:</h3>
      <ul>
        {recipeDetails.extendedIngredients?.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipeDetails.analyzedInstructions?.[0]?.steps.map((step, index) => (
          <li key={index}>{step.step}</li>
        ))}
      </ol>
    </div>
  );
}
