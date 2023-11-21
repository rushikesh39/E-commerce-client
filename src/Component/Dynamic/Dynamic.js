
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProducts } from "../../Store/productSlice";
import { addToCart } from '../../Store/cartSlice';
import "./Dynamic.css"
import jwtDecode from "jwt-decode";
// import axios from "axios";


function Dynamic() {
  const { id } = useParams();
  console.log("product Id",id)
  const products=useSelector(selectProducts)
  console.log("products ",products)
  const product=products.find(item=>item._id===id)
  console.log("final product",product)
  const dispatch=useDispatch()


const [email, setEmail]=useState(null)
  const token = localStorage.getItem("token");
  
 
  const data = useSelector((state) => state.cartProduct.cartItems);
  console.log("cart Item data", data);
  
  
  const addToCartProduct=()=>{
    if(token){
      const decodedToken = jwtDecode(token);
       setEmail(decodedToken.email)
       if(email){
        dispatch(addToCart(product)); 
      }
       }
    
      
  }

  return product && (
   
    <div className='dynamic'>
      <h2>Product Details</h2>
      <div className="dynamic-product-detail">
      <div className="dynamic-product-image">
      <div>
      { Array.isArray(product.image) ? <img  src={product.image[0]} alt={product.name}/>:<img className='dynamic-img' src={product.image} alt={product.name} />}
      <div><button onClick={addToCartProduct} className="dynamic-add-to-cart-button">Add to Cart</button></div>
      </div>
        
       
      </div>
      <div className="dynamic-product-info">
        <h3 className="dynamic-product-name">{product.product_name}</h3>
        <p>⭐⭐⭐⭐⭐{product.product_rating}</p>
        {/* <RatingStar productRating={product.product_rating}/> */}
        <p className="dynamic-product-price"><span className="discount dynamic_discount">₹{product.discounted_price}</span>  <span className="retail-price">MRP:.₹{product.retail_price}</span><span className="discount"> off { (((product.retail_price - product.discounted_price) /product.retail_price) * 100).toFixed(0) }%</span></p>
        <h3>Offers:</h3>
        <p>🎟️Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</p>
        <p>🎟️Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</p>
        <p>🎟️Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</p>
        <p>🎟️Partner OfferExtra 10% off upto ₹500 on next furniture purchase</p>
        <h3>Details:</h3>
        <p className="dynamic-product-description">{product.description}</p>
       
       
      </div>
    </div>
   
    </div>
  );
}

export default Dynamic;
