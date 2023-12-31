import { useState } from "react";
import "./StockUpForm.css";

//? Init Component
export default function StockUpForm() {
    const [stockForm, setStockForm] = useState({
        category: "",
        product: "",
        quantity: "0",
        uom: "",
        purchaseDate: "",
        expiryDate: ""
    })
//? To handle submission of form
const handleAdd = async (event) => {
    event.preventDefault();
    const url = "https://api.airtable.com/v0/app02KAwukMua69NJ/Table%201";
    const data = {
        "fields": {
            "Category": stockForm.category,
            "Product": stockForm.product,
            "Quantity": stockForm.quantity,
            "UOM": stockForm.uom,
            "PurchaseDate": stockForm.purchaseDate,
            "ExpiryDate": stockForm.expiryDate
        }
    };

    const create = {
        method: "POST",
        headers: {
            "Authorization": "Bearer patnsCZM9g1WFDQ39.e0a7417561aa4437ef64b85a6b406a3e479dda69c4c1341c99b9ca279dd2f065",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(url, create);
    if (response.ok) {
        console.log("Item added successfully");
        setStockForm({
            category: "",
            product: "",
            quantity: "0",
            uom: "",
            purchaseDate: "",
            expiryDate: ""
        });
    } else {
        console.log("Failed to add item", await response.json());
    }
};
    
//? Create form to collect user's input
//? Category - Drop down selector
//? Quantity - Number only
//? UOM - Drop down selector
//? Purchase Date - Date selector
//? Expiry Date - Quick add buttons, Date selector

    return (
        <div className="form-container">
            <form className="stock-up-form" onSubmit={handleAdd}>
                <label className="category">
                    Category
                    <br/>
                    <select
                    value={stockForm.category} 
                    onChange={(event) => setStockForm({...stockForm, category: event.target.value})}>
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
                <input type="text" className="input-field" 
                    value={stockForm.product} 
                    onChange={(event) => setStockForm({...stockForm, product: event.target.value})} />
                </label>
                <br/>
                <label className="quantity">
                    Quantity
                    <br/>
                <input type="number" className="input-field" 
                    value={stockForm.quantity} 
                    onChange={(event) => setStockForm({...stockForm, quantity: event.target.value})} />
                    <select
                    value={stockForm.uom} 
                    onChange={(event) => setStockForm({...stockForm, uom: event.target.value})}>
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
                    value={stockForm.purchaseDate} 
                    onChange={(event) => setStockForm({...stockForm, purchaseDate: event.target.value})} />
                </label>
                <br/>
                <label>
                    Expiry Date
                    <br/>
                <input type="date"
                    className="expiry-calendar" 
                    value={stockForm.expiryDate} 
                    onChange={(event) => setStockForm({...stockForm, expiryDate: event.target.value})} />
                </label>
                <br/>
                <button className="fridge-it-button" type="submit">Fridge It!</button>
            </form>
        </div>
    );
}