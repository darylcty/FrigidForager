import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchCriteria.css";
import SearchResultsCard from "../SearchResults/SearchResultsCard";


export default function SearchCriteria() {

//? Init Component
    const [searchIngredients, setSearchIngredients] = useState("");
    
//? Init setRecipe state
    const [results, setResults] = useState([]);

//? To handle searching of ingredients provided

    const handleSearch = async (event) => {
        event.preventDefault();

        const ingredientsArray = searchIngredients.split(",").map(ingredient => ingredient.trim());
        const ingredientsString = ingredientsArray.join(",+");
        const url = 
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsString}&number=9`;
       
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
            <form className="search-form" onSubmit={handleSearch}>
                <label className="search-ingredient">
                    Search multiple ingredients separating with a comma.
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={searchIngredients}
                    placeholder="tomato, potato, carrots" 
                    onChange={(event) => setSearchIngredients(event.target.value)} />
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