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

const product ={
    name:"blue ",
    images:[{url:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/283060535_405520068252692_4971397351580162158_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG0qbwFQESQwbCeTtGtmAsrEDRzxSarrN8QNHPFJqus38O7JBHZhd7oV64BKu4rorpzENNRpiG658PUlBqin57-&_nc_ohc=DnxKrQgfO3oAX9PZiYK&_nc_ht=scontent.fdac140-1.fna&oh=00_AT9rztSuh30MdION5TZktHaJjrnom76JkyU28S0UmtcjKA&oe=62A1AC0A"}],
    price:"5555",
    _id:"anwar"
}

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

   <MetaData title="Home Page " />

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