import React, {useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from "./Checkout";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51MpwuWE2VWrjKtnJh9JHDpjBOnPbB9BXgYF9NVmmT71WyCGH2nim7JVrVfrVsrvScPb1zWilVxUUrH4ucNZtRPvr00vQL1HfAC")

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    // Will only run once when the app component loads...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // THE USER JUST LOGGED IN / THE USER WAS LOGGED IN
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        // THE USER IS LOGGED OUT
       dispatch({
        type: 'SET_USER',
        user: null
       })
      }

    })
  }, [])

  return (
    //BEM
    <div className="App">
      
        <Router>
        <Header />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            {promise && (
            <Route
              path="/payment"
              element={(
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              )}
            />
            )}
          </Routes>
        </Router>
    </div>
  
  );
}

export default App;
