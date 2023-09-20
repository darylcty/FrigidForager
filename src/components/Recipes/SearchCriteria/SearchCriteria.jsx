import { useState } from "react";
import "./SearchCriteria.css";
import SearchResultsCard from "../SearchResults/SearchResultsCard";


export default function SearchCriteria() {

//? Init Component
    const [firstIngredient, setFirstIngredient] = useState("");
    const [secondIngredient, setSecondIngredient] = useState("");
    const [thirdIngredient, setThirdIngredient] = useState("");
    const [fourthIngredient, setFourthIngredient] = useState("");
    const [fifthIngredient, setFifthIngredient] = useState("");
    
//? Init setRecipe state
    const [recipes, setRecipes] = useState([]);

//? To handle searching of ingredients provided

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
        const url = 
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${firstIngredient},+${secondIngredient},+${thirdIngredient},+${fourthIngredient},+${fifthIngredient}&number=9`;
       
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
          setRecipes(data);
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
            }

    };


      //? Create form to collect user's ingredient on hand
    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSearch}>
                <label className="search-ingredient">
                    First Ingredient
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={firstIngredient} 
                    onChange={(event) => setFirstIngredient(event.target.value)} />
                </label>
                <br/>
                <label className="search-ingredient">
                    Second Ingredient
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={secondIngredient} 
                    onChange={(event) => setSecondIngredient(event.target.value)} />
                </label>
                <br/>
                <label className="search-ingredient">
                    Third Ingredient
                    <br/>
                <input type="text"
                    className="input-field"
                    value={thirdIngredient} 
                    onChange={(event) => setThirdIngredient(event.target.value)} />
                </label>
                <br/>
                <label className="search-ingredient">
                    Fourth Ingredient
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={fourthIngredient} 
                    onChange={(event) => setFourthIngredient(event.target.value)} />
                </label>
                <br/>
                <label className="search-ingredient">
                    Fifth Ingredient
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={fifthIngredient} 
                    onChange={(event) => setFifthIngredient(event.target.value)} />
                </label>
                <br/>
                <button className="forage-button" type="submit">Forage!</button>
            </form>
            <SearchResultsCard recipes={recipes} />
        </div>
    );
}