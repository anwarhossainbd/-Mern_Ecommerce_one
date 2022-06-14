import React, { Fragment ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "./Home.css"
import Product from "./ProductCard.js";
import MetaData from '../layout/MetaData';
import { getProduct,clearErrors } from '../../actions/productActions';
import { useSelector,useDispatch } from 'react-redux';
import Loader from "../layout/Loader/Loader"
import { useAlert } from 'react-alert';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


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
        <p>Welcome to BD Express</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href='#container'>
              <button>Scroll  <FontAwesomeIcon icon={faArrowDown} />  </button>
            </a>
    </div>
      


   <h2 className="homeHeading">Featured Products</h2>

   <div className='container' id="container">

   {
     products && products.map((product)=> <Product product={product} />)
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