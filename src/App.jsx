import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import StockUpForm from './components/Fridge/StockUpForm/StockUpForm';
import SearchCriteria from './components/Recipes/SearchCriteria/SearchCriteria'
import SearchResultsCard from './components/Recipes/SearchResults/SearchResultsCard';
import RecipeCard from './components/Recipes/RecipeCard/RecipeCard';
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/search-recipes" element={<SearchCriteria />} />
        <Route path="/stock-up-form" element={<StockUpForm />} />
        {/* <Route path="/search-results/" element={<SearchResultsCard results={results} handleClick={handleClick} />} /> */}
        <Route path="/recipe-info/:id" element={<RecipeCard />} />
        {/* <Route path="/inventory" element={<Inventory />} /> */}
      </Routes>       
    </>
  )
}


