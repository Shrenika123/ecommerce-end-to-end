import React,{lazy,useEffect, Suspense} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Component/Header/Header'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
// import { Button } from '@material-ui/core';
import Home from './Component/Home/home'
import CheckOut from './Component/Checkout/Checkout'
import Login from './Component/Login1/Login1'
import {auth} from './firebase'
import {useStateValue} from './util/stateProvider'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Payment from './Component/Payment/Payment'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {useStripe,useElements,cardElements} from '@stripe/react-stripe-js'
import Orders from './Component/Orders/Orders'

const promise=loadStripe('pk_test_51HUyx9J2fLxeyUOvFLHvLZVShodwG8meGFgaUkElZ7VUgt1hBuWrfq2XCvyCNCy3mTGoPgiG5pSLgfnyN5pgsW0i001gudrtFl')

const theme = createMuiTheme({      
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});





function App() {
  const [{},dispatch]=useStateValue()
 

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("the auth user is ",authUser)
      if(authUser)
      {
        console.log(authUser)
          dispatch({
            type:"SET_USER",
            authUser:authUser
          })
      }
      else{
        dispatch({
          type:"SET_USER",
          authUser:null
        })
      }
    })
   }, [])

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Switch>
        <Route path="/orders" >
            {/* <Login/> */}
            <Header/>
            <Orders/>
          </Route>
          <Route path="/login" >
            {/* <Login/> */}
            <Login/>
          </Route>
          <Route path="/cart" >
          <Header />
          <CheckOut/>
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
            </Route>

          <Route path="/" >
            <Header />
            <Home/>
          </Route>
        </Switch>
      </Router>

    </div>
    </ThemeProvider>

  );
}

export default App;
