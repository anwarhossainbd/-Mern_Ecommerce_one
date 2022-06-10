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

function App() {

  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"],
      },
    });
  },[]);

  return (
   
    <Router>
      <Header /> 

      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/product/:id" exact={true} component={ProductDetails}/>
        <Route path="/products" exact={true} component={Products}/>

        <Route path="/products/:keyword"  component={Products}/>

        <Route path="/search" exact={true} component={Search}/>

      </Switch>

      <Footer />
        
    </Router>

  );
}

export default App;
