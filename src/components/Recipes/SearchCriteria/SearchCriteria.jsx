import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchCriteria.css";

export default function SearchCriteria() {

//? Init Component
    const [searchIngredients, setSearchIngredients] = useState({
        firstIngredient: "",
        secondIngredient: "",
        thirdIngredient: "",
        fourthIngredient: "",
        fifthIngredient: "",
    })
    
//? Init setRecipe state
    const [results, setResults] = useState([]);

//? To handle searching of ingredients provided
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();

        const url = 
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchIngredients.firstIngredient},+${searchIngredients.secondIngredient},+${searchIngredients.thirdIngredient},+${searchIngredients.fourthIngredient},+${searchIngredients.fifthIngredient}&number=9`;
       
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
          navigate("/search-results", { state: { results: data } });
    };

      //? Create form to collect user's ingredient on hand
    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSearch}>
                <label className="search-ingredient">
                    Enter first ingredient
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={searchIngredients.firstIngredient}
                    onChange={(event) => setSearchIngredients({...searchIngredients, firstIngredient: event.target.value})}/>
                </label>
                <br/>
                <label className="search-ingredient">
                    Enter second ingredient
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={searchIngredients.secondIngredient}
                    onChange={(event) => setSearchIngredients({...searchIngredients, secondIngredient: event.target.value})}/>
                </label>
                <br/>
                <label className="search-ingredient">
                    Enter third ingredient
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={searchIngredients.thirdIngredient}
                    onChange={(event) => setSearchIngredients({...searchIngredients, thirdIngredient: event.target.value})}/>
                </label>
                <br/>
                <label className="search-ingredient">
                    Enter fourth ingredient
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={searchIngredients.fourthIngredient}
                    onChange={(event) => setSearchIngredients({...searchIngredients, fourthIngredient: event.target.value})}/>
                </label>
                <br/>
                <label className="search-ingredient">
                    Enter fifth ingredient
                    <br/>
                <input type="text" 
                    className="input-field"
                    value={searchIngredients.fifthIngredient}
                    onChange={(event) => setSearchIngredients({...searchIngredients, fifthIngredient: event.target.value})}/>
                </label>
                <br/>
                <button className="forage-button" type="submit">Forage!</button>
            </form>
        </div>
    );
}