import { useState } from "react";
import "./SearchCriteria.css";


export default function SearchCriteria() {

//? Init Component
    const [firstIngredient, setFirstIngredient] = useState("");
    const [secondIngredient, setSecondIngredient] = useState("");
    const [thirdIngredient, setThirdIngredient] = useState("");
    const [fourthIngredient, setFourthIngredient] = useState("");
    const [fifthIngredient, setFifthIngredient] = useState("");

//? To handle searching of ingredients provided
    // const ingredients = [ firstIngredient, secondIngredient, thirdIngredient. fourthIngredient, fifthIngredient];
    const handleSearch = async () => {
        const url = 
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${firstIngredient},+${secondIngredient},+${thirdIngredient}&number=10`;
       
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "a5476988f20d461e986c86efde787dfb"
          },
        });
        await response.json();
        // updateRecipe(recipe.id);
      };

      //? Create form to collect user's ingredient on hand
    return (
        <div className="search-container">
            <form className="search-form">
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
                <button className="forage-button" onClick={handleSearch}>Forage!</button>
            </form>
        </div>
    );
}