import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import StockUpForm from './components/Fridge/StockUpForm/StockUpForm';
import SearchCriteria from './components/Recipes/SearchCriteria/SearchCriteria'
import SearchResultsCard from './components/Recipes/SearchResults/SearchResultsCard';
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/recipes" element={<SearchCriteria />} />
        <Route path="/stock-up-form" element={<StockUpForm />} />
        <Route path="/search-results" element={<SearchResultsCard />} />
        {/* <Route path="/inventory" element={<Inventory />} /> */}
      </Routes>       
    </>
  )
}


