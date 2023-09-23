import { useState, useEffect } from "react";
import "./Inventory.css";

export default function Inventory() {
    
    const TOKEN = "patnsCZM9g1WFDQ39.e0a7417561aa4437ef64b85a6b406a3e479dda69c4c1341c99b9ca279dd2f065";
    const BASE_URL = "https://api.airtable.com/v0/app02KAwukMua69NJ/Table%201";
    const [fridge, setFridge] = useState([]);

    //? fetchFridge is outside the useEffect hook so it can be used in the handleDelete function.
    const fetchFridge = async () => {
      const response = await fetch(BASE_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const jsonData = await response.json();
      const fridgeData = jsonData.records.map((data) => ({
        ...data.fields,
        id: data.id,
      }));

      setFridge(fridgeData);
    };
    
    useEffect(() => {
          fetchFridge();
        }, []);
    
    const handleDelete = async (id) => {
      const url = `https://api.airtable.com/v0/app02KAwukMua69NJ/Table%201/${id}`;
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      // fetchFridge();
    }
        return (
            <div className="fridge-contents-table">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>UOM</th>
                    <th>Purchase Date</th>
                    <th>Expiry Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {fridge.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Category}</td>
                      <td>{item.Product}</td>
                      <td>{item.Quantity}</td>
                      <td>{item.UOM}</td>
                      <td>{item.PurchaseDate}</td>
                      <td>{item.ExpiryDate}</td>
                      <td>Edit</td>
                      <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          
}