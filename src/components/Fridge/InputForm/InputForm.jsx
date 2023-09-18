import { useState } from "react";
import "./Inputform.css";

//? Init Component
export default function InputForm() {
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("0");
    const [uom, setUom] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //airtable portion later
    }
//? [UX] To add days to purchase date corresponding to button clicked (3/7/10days)
    const addDaysToPurchase = (daysToAdd) => {
        let date = new Date(purchaseDate);
        date.setDate(date.getDate() + daysToAdd);
        setPurchaseDate(date.toISOString().substring(0, 10));
      }

//? Create form to collect user's input
//? Category - Drop down selector
//? Quantity - Number only
//? UOM - Drop down selector
//? Purchase Date - Date selector
//? Expiry Date - Quick add buttons, Date selector

    return (
        <form onSubmit={handleSubmit} className="fridge-form">
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
                Product Name
                <br/>
               <input type="text" 
                value={productName} 
                onChange={(event) => setProductName(event.target.value)} />
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
                    <option value="" disabled>Unit of measure</option>
                        <optgroup label="Weight">
                            <option value="grams">g</option>
                            <option value="miligrams">mg</option>
                            <option value="kilograms">kg</option>
                            <option value="pounds">lbs</option>  
                            <option value="ounces">oz</option>
                        </optgroup>
                        <optgroup label="Volume">
                            <option value="millilitre">ml</option>
                            <option value="centilitre">cl</option>
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
            <label>
                Expiry Date
                <div className="add-expiry-buttons">
                    <button
                    className="3-days-button" 
                    type="button"
                    onClick={() => addDaysToPurchase(3)}>+3 Days
                    </button>
                    <button 
                    className="7-days-button" 
                    type="button"
                    onClick={() => addDaysToPurchase(7)}>+7 Days
                    </button>
                    <button 
                    className="10-days-button" 
                    type="button"
                    onClick={() => addDaysToPurchase(10)}>+10 Days
                    </button>
                </div>
               <input type="date" 
                value={expiryDate} 
                onChange={(event) => setExpiryDate(event.target.value)} />
            </label>
        </form>
    );
}