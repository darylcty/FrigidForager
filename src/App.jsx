import { useState } from "react";
import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import InputForm from './components/Fridge/InputForm/InputForm';
import SearchCriteria from './components/Recipes/SearchCriteria/SearchCriteria';

export default function App() {


  return (
    <>
     <NavBar />
     {/* <InputForm /> */}
     <SearchCriteria />
    </>
  )
}


