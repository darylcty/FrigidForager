import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import Home from './components/Header/Pages/Home';
import StockUpForm from './components/Fridge/StockUpForm/StockUpForm';
import SearchCriteria from './components/Recipes/SearchCriteria/SearchCriteria'
import SearchResultsCard from './components/Recipes/SearchResults/SearchResultsCard';
import RecipeCard from './components/Recipes/RecipeCard/RecipeCard';
import Inventory from './components/Fridge/Inventory/Inventory';
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
    <>
      <NavBar />
      <hr className="first-hr"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-recipes" element={<SearchCriteria />} />
        <Route path="/search-results" element={<SearchResultsCard />} />
        <Route path="/stock-up-form" element={<StockUpForm />} />
        <Route path="/recipe-info/:id" element={<RecipeCard />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>       
    </>
  )
}


