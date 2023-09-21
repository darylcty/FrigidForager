import { useState, useEffect } from "react";
import "./Inventory.css";

export default function Inventory() {
    
    const TOKEN = "patnsCZM9g1WFDQ39.e0a7417561aa4437ef64b85a6b406a3e479dda69c4c1341c99b9ca279dd2f065";
    const BASE_URL = "https://api.airtable.com/v0/app02KAwukMua69NJ/Table%201";
    const [fridge, setFridge] = useState([]);

    useEffect(() => {
        console.log("fetching data...");
          const fetchFridge = async () => {
            const response = await fetch(BASE_URL, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${TOKEN}`,
              },
            });
            const jsonData = await response.json();
            console.log("json data: ");
            const fridgeData = jsonData.records.map((data) => ({
              ...data.fields,
              id: data.id,
            }));
            console.log("fridge data: ");
            setFridge(fridgeData);
            // setRefresh(!refresh);
          };
          fetchFridge();
        }, []);

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
                      <td>Delete</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          
}