import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'
import "./ProductCard.css"
import { Button } from 'react-bootstrap'


const Product = ({product,match}) => {

  const options ={
    value:product.ratings,
    readOnly:true,
    precision:0.5,
}



  return (

    <Fragment>  

       <Link className="productCard" to={`/product/${product._id}`}>
         <img className="imageStyle" src={product.images[0].url} alt={product.name} />
         <p>{product.name}</p>
         <div className="productCard2">
           <Rating {...options}   /> <span className="productCardSpan">({product.numOfReviews} Reviews)</span>
         </div>
         <span  className="productCardC" >  ${product.price}</span>

         <span className="myClass">
               <Button >View Details</Button>
         </span>
     </Link>
    


    
    
     </Fragment>

    
  )
}

export default Product



//  <Link className="productCard" to={`/product/${product._id}`}>
//          <img className="imageStyle" src={product.images[0].url} alt={product.name} />
//          <p>{product.name}</p>
//          <div className="productCard2">
//            <Rating {...options}   /> <span className="productCardSpan">({product.numOfReviews} Reviews)</span>
//          </div>
//          <span  className="productCardC" >  ${product.price}</span>
//      </Link>