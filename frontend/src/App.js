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
import Cart from "./component/Cart/Cart.js"
import Shipping from "./component/Cart/Shipping.js"
import ConfirmOrder from "./component/Cart/ConfirmOrder.js"
import {useState,useEffect} from "react";
import axios from "axios"
import Payment from "./component/Cart/Payment.js"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js"
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";

function App() {

  const {isAuthenticated,user} = useSelector(state=>state.user)

  const [stripeApiKey, setStripeApiKey] = useState("")

  async function getStripeApiKey(){
    const {data} = await axios.get("/api/v1/stripeapikey")
    setStripeApiKey(data.stripeApiKey)
  }

  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();

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
        <Route path="/Cart" exact={true} component={Cart}/>



        <ProtectedRoute path="/shipping" exact={true} component={Shipping}/>
        <ProtectedRoute path="/order/confirm" exact={true} component={ConfirmOrder}/>
      
         {stripeApiKey && (
 
        <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute path="/process/payment" exact={true} component={Payment}/>
        </Elements>

        )}


        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />



      </Switch>

          
        <ProtectedRoute exact path="/success" component={OrderSuccess} />
        <ProtectedRoute exact path="/orders" component={MyOrders} />
             

        <ProtectedRoute isAdmin={true} exact path="/admin/dashboard" component={Dashboard} />
        <ProtectedRoute isAdmin={true} exact path="/admin/products" component={ProductList} />
        <ProtectedRoute exact path="/admin/product" isAdmin={true} component={NewProduct}/>
        <ProtectedRoute exact path="/admin/product/:id" isAdmin={true} component={UpdateProduct}/>

        <ProtectedRoute exact path="/admin/orders" isAdmin={true} component={OrderList}/>


      <Footer />
        
    </Router>

  );
}

export default App;













