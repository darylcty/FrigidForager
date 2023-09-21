import { useState } from "react";
import { Link } from "react-router-dom";
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
    const [results, setResults] = useState([]);

//? To handle searching of ingredients provided

    const handleSearch = async (event) => {
        event.preventDefault();
        const url = 
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${firstIngredient},+${secondIngredient},+${thirdIngredient},+${fourthIngredient},+${fifthIngredient}&number=9`;
       
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "37288580d1374726b9bee81a8cfca5c2"
          },
        });    
          const data = await response.json();
          console.log("Fetched data:", data);
          setResults(data);

          }

      //? Create form to collect user's ingredient on hand
    return (
        <div className="search-container">
            <p>Enter at least 1 ingredient and up to 5 ingredients!</p>
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
                {/* <Link to={`/search-results/`}> */}
                    <button className="forage-button" type="submit">Forage!</button>
                {/* </Link> */}
            </form>
            <SearchResultsCard results={results} />
        </div>
    );
}