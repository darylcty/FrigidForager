import { useState } from "react";
import "./SearchResultsCard.css";

export default function SearchResultsCard ({recipes}) {
   
    //? Init selectedRecipe

    const [selectedRecipe, setSelectedRecipe] = useState("");

    const handleClick = async (id) => {
        try {
            const url = 
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`;

            const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "37288580d1374726b9bee81a8cfca5c2"
            },
            });

            if (!response.ok) {
                throw new Error(`An error occurred: ${response.statusText}`);
            }
        
            const data = await response.json();
            console.log("Fetched data:", data);
            setSelectedRecipe(data);
            } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
                }
        };

    return (
        <div className="search-results-container">
            {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card" onClick={recipe.id}>
                <img src={recipe.image} alt={recipe.title} className="recipe-image"/>
                <h2 className="recipe-title">{recipe.title}</h2>
            </div>
            ))}
        </div>
            );

}