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
const handleSearch = async (event) => {
    event.preventDefault();
    //! TODO: ADD API CALL HERE
}

//? Create form to collect user's ingredient on hand
    return (
        <div className="search-container">
            <form className="search-form">
                <label className="search-ingredient">
                    First Ingredient
                    <br/>
                <input type="text" 
                    value={firstIngredient} 
                    onChange={(event) => setFirstIngredient(event.target.value)} />
                </label>
                <br/>
                <label className="search-ingredient">
                    Second Ingredient
                    <br/>
                <input type="text" 
                    value={secondIngredient} 
                    onChange={(event) => setSecondIngredient(event.target.value)} />
                </label>
                <br/>
                <label className="search-ingredient">
                    Third Ingredient
                    <br/>
                <input type="text"
                    value={thirdIngredient} 
                    onChange={(event) => setThirdIngredient(event.target.value)} />
                </label>
                <br/>
                <label className="search-ingredient">
                    Fourth Ingredient
                    <br/>
                <input type="text" 
                    value={fourthIngredient} 
                    onChange={(event) => setFourthIngredient(event.target.value)} />
                </label>
                <br/>
                <label className="search-ingredient">
                    Fifth Ingredient
                    <br/>
                <input type="text" 
                    value={fifthIngredient} 
                    onChange={(event) => setFifthIngredient(event.target.value)} />
                </label>
                <br/>
                <button onClick={handleSearch}>Forage!</button>
            </form>
        </div>
    );
}