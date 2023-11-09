
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProducts } from "../../Store/productSlice";
import "./Dynamic.css"

function Dynamic() {
  const { id } = useParams();
  console.log("product Id",id)
  const products=useSelector(selectProducts)
  console.log("products ",products)
  const product=products.find(item=>item._id===id)
  console.log("final product",product)

  return (
    <div className='dynamic'>
      <h2>Product Details</h2>
      <div className="dynamic-product-detail">
      <div className="dynamic-product-image">
        <img src={product.imgURL} alt={product.name} />
        <button className="dynamic-add-to-cart-button">Add to Cart</button>
      </div>
      <div className="dynamic-product-info">
        <h3 className="dynamic-product-name">{product.product_name}</h3>
        <h2 className="dynamic-product-price">₹{product.discounted_price}</h2>
        <p className="dynamic-product-description">{product.discription}</p>
       
       
      </div>
    </div>
   
    </div>
  );
}

export default Dynamic;
