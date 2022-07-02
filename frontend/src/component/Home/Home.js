import React, { Fragment ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "./Home.css"
import ProductCard from "./ProductCard.js";
import MetaData from '../layout/MetaData';
import { getProduct,clearErrors } from '../../actions/productActions';
import { useSelector,useDispatch } from 'react-redux';
import Loader from "../layout/Loader/Loader"
import { useAlert } from 'react-alert';


const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const {loading,error,products} = useSelector(state=>state.products)

  useEffect(() => {

    if(error){

      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  
  }, [dispatch,error,alert]);


   



  return (
   <Fragment>
   
   {
     loading? <Loader /> : (

      <Fragment>

   <MetaData title="HOME PAGE " />



   
    <div className="banner">
      <div className="banner-style">
        <p>Welcome to BD Express</p>
            <h1>FIND AMAZING PRODUCTS </h1>

           

            <a href="#container" class="btn btn1">Show Products</a>
      
      </div>

    </div>
      


 
   <h2 className="homeHeading">Featured Products</h2>

   <div className="container"  id="container">

   {
     products && products.map((product)=> <ProductCard product={product} />)
   }
   
   </div>
  
  


   </Fragment>
     )
   }
   
   </Fragment>
  )
}
export default Home








  //  <div className="banner">
  //          <p>Welcome to BD Express</p>
  //          <h1>FIND AMAZING PRODUCTS BELOW</h1>

  //          <a href='#container'>
  //             <button>Scroll  <FontAwesomeIcon icon={faArrowDown} />  </button>
  //          </a>
  //  </div>



  //    <div className="banner">
  //          <p>Welcome to BD Express</p>
  //          <h1>FIND AMAZING PRODUCTS BELOW</h1>

  //          <a href='#container'>
  //             <button>Scroll  <FontAwesomeIcon icon={faArrowDown} />  </button>
  //          </a>
  //  </div>
