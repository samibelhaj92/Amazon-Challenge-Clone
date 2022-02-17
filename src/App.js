import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./Login";


function App() {
  return (
    // BEM
    <div className="app">
      <Routes>
        <Route 
          path='/' 
          element={<><Header/><Home/></>}
        />
        <Route 
          path='/checkout' 
          element={<><Header/><Checkout/></>}
        />
        <Route 
          path='/login' 
          element={<Login/>}
        />
      </Routes>
      
    </div>
  
  );
}

export default App;
