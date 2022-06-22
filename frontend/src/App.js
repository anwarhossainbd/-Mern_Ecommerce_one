import './App.css';
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom"
import React from 'react';
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store"
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js"
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from "./component/User/UpdateProfile.js"
import UpdatePassword from "./component/User/UpdatePassword.js"
import ForgotPassword from "./component/User/ForgotPassword.js"
import ResetPassword from "./component/User/ResetPassword.js"



function App() {

  const {isAuthenticated,user} = useSelector(state=>state.user)

  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"],
      },
    });

    store.dispatch(loadUser())

  },[]);

  return (
   
    <Router>
      <Header /> 

      {isAuthenticated && <UserOptions user={user} />} 


      <Switch>
        
        <Route path="/" exact={true} component={Home}/>
        <Route path="/product/:id" exact={true} component={ProductDetails}/>
        <Route path="/products" exact={true} component={Products}/>
        <Route path="/products/:keyword"  component={Products}/>
        <Route path="/search" exact={true} component={Search}/>


        <ProtectedRoute path="/account" exact={true} component={Profile} />
        <ProtectedRoute path="/me/update" exact={true} component={UpdateProfile}/>
        <ProtectedRoute path="/password/update" exact={true} component={UpdatePassword}/>

        <Route path="/password/forgot" exact={true} component={ForgotPassword}/>
        <Route path="/password/reset/:token" exact={true} component={ResetPassword}/>


        <Route path="/login" exact={true} component={LoginSignUp}/>



      </Switch>

      <Footer />
        
    </Router>

  );
}

export default App;