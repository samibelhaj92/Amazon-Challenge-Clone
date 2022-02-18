import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashbord/Dashbord";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment/Payment";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from "./components/Orders/Orders";

const promise = loadStripe(
  'pk_test_51KUCJLAxOCuRttuYyty1AH5JsTS9f3ttUL8LJ4IvE2Gb5AdEf9iD1Yzi0dlGJD2xyha8h5VN0enPr5cTwVD34MPk00hleze8Uz'
);

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <div className="app">
  
      <Routes>
        <Route 
          path='/orders' 
          element={<><Header/><Orders/></>}
        />
        <Route 
          path='/' 
          element={<><Header/><Home/></>}
        />
        <Route 
          path='/checkout' 
          element={<><Header/><Checkout/></>}
        />
        <Route 
          exact path='/login' 
          element={<Login/>}
        />
        <Route 
          exact path='/register' 
          element={<Register/>}
        />
        <Route 
        exact path="/reset" 
        element={<Reset/>} 
        />
        <Route 
        exact path="/dashboard" 
        element={<Dashboard/>} 
        />
        <Route 
        exact path='/payment' 
          element={<>
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
          </>}
        />
      </Routes>
   
    </div>
  
  );
}

export default App;
