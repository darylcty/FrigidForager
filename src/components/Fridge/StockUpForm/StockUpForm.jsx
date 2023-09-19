import { useState } from "react";
import "./StockUpForm.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

//? Init Component
export default function StockUpForm() {
    const [category, setCategory] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("0");
    const [uom, setUom] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");

//? To handle submission of form
    const handleAdd = async (event) => {
        event.preventDefault();
        // const newIngredient = makeIngredient(product);
        // addIngredient(newIngredient);
        // setIngredient("");
    }
    
//? [UX] To add days to purchase date corresponding to button clicked (3/7/10days)
const addDaysToExpiry = (daysToAdd) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    setExpiryDate(date.toISOString().substring(0, 10));
  }

//? Create form to collect user's input
//? Category - Drop down selector
//? Quantity - Number only
//? UOM - Drop down selector
//? Purchase Date - Date selector
//? Expiry Date - Quick add buttons, Date selector

    return (
        <div className="form-container">
            <form className="stock-up-form">
                <label className="category">
                    Category
                    <br/>
                    <select
                    value={category} 
                    onChange={(event) => setCategory(event.target.value)}>
                        <option value="" disabled>Select Category</option>
                        <option value="Vegetable">Vegetables</option>
                        <option value="Fruit">Fruits</option>
                        <option value="Meat">Meat</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Grain">Grain & Bread</option>
                        <option value="Condiment">Condiments</option>
                        <option value="Processed">Processed Food</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
                <br/>
                <label className="product-name">
                    Product
                    <br/>
                <input type="text" 
                    value={product} 
                    onChange={(event) => setProduct(event.target.value)} />
                </label>
                <br/>
                <label className="quantity">
                    Quantity
                    <br/>
                <input type="number" 
                    value={quantity} 
                    onChange={(event) => setQuantity(event.target.value)} />
                    <select
                    value={uom} 
                    onChange={(event) => setUom(event.target.value)}>
                        <option value="" disabled>Unit of measurement</option>
                            <optgroup label="Weight">
                                <option value="grams">g</option>
                                <option value="milligrams">mg</option>
                                <option value="kilograms">kg</option>
                                <option value="pounds">lbs</option>  
                                <option value="ounces">oz</option>
                            </optgroup>
                            <optgroup label="Volume">
                                <option value="milliliter">ml</option>
                                <option value="centiliter">cl</option>
                                <option value="litre">l</option>
                            </optgroup>
                            <optgroup label="General">
                                <option value="pieces">pcs</option>
                                <option value="carton">carton</option>
                                <option value="crate">crate</option>
                                <option value="dozen">dozen</option>
                                <option value="pack">pack</option>
                                <option value="bundle">bundle</option>
                            </optgroup>
                    </select>
                </label>
                <br/>
                <label>
                    Purchase Date
                    <br/>
                <input type="date" 
                    value={purchaseDate} 
                    onChange={(event) => setPurchaseDate(event.target.value)} />
                </label>
                <br/>
                <p>USE A DATE LIBRARY TO HANDLE DATES</p>
                <label>
                    Expiry Date
                    {/* <div className="add-expiry-buttons">
                        <button
                        className="3-days-button" 
                        type="button"
                        onClick={() => addDaysToExpiry(3)}>+3 Days
                        </button>
                        <button 
                        className="7-days-button" 
                        type="button"
                        onClick={() => addDaysToExpiry(7)}>+7 Days
                        </button>
                        <button 
                        className="10-days-button" 
                        type="button"
                        onClick={() => addDaysToExpiry(10)}>+10 Days
                        </button>
                    </div> */}
                    <br/>
                <input type="date"
                    className="expiry-calendar" 
                    value={expiryDate} 
                    onChange={(event) => setExpiryDate(event.target.value)} />
                </label>
                <br/>
                <button className="fridge-it-button" onClick={handleAdd}>Fridge It!</button>
            </form>
        </div>
    );
}