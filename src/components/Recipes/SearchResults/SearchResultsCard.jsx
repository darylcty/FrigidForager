import { useState } from "react";
import "./SearchResultsCard.css";
import { useLocation, useNavigate } from "react-router-dom";


export default function SearchResultsCard () {
   const location = useLocation();
   const results = location.state.results
    const [selectedRecipe, setSelectedRecipe] = useState({});
    const [id, setID] = useState("");
    const navigate = useNavigate();

    const handleClick = async (clickedId) => {
        setID(clickedId);
        const url = `https://api.spoonacular.com/recipes/${clickedId}/information?includeNutrition=false`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "37288580d1374726b9bee81a8cfca5c2"
            },
        });
        const data = await response.json();
        console.log("Fetched data:", data);
        navigate(`/recipe-info/${clickedId}`);

    };
        
    return (
        <div className="search-results-container">
            {results.map((result, id) => (
            <div key={id} className="results-card" onClick={() => handleClick(result.id)}>
                <img src={result.image} className="results-image"/>
                <h2 className="results-title">{result.title}</h2>
            </div>
            ))}
        </div>
    );
}
