import React from 'react'
import "./Product.css"
import {useSelector } from "react-redux";
import { selectProducts } from "../../Store/productSlice";
import { Link } from 'react-router-dom';

function AllCategoryProduct() {
  const products  = useSelector(selectProducts);
  console.log("all category product", products);




// Your array of objects
const myArray =products;

// Function to get an array of 20 different random objects
function getRandomObjects(arr, count) {
  const randomObjects = [];
  const totalObjects = arr.length;

  // Make sure count is not greater than the total number of objects
  count = Math.min(count, totalObjects);

  while (randomObjects.length < count) {
    const randomIndex = Math.floor(Math.random() * totalObjects);
    const randomObject = arr[randomIndex];

    // Check if the object is not already in the result array
    if (!randomObjects.includes(randomObject)) {
      randomObjects.push(randomObject);
    }
  }

  return randomObjects;
}

// Get an array of 20 different random objects from your array
const randomObjects = getRandomObjects(myArray, 20);

console.log(randomObjects);




  return (
  <>
  <div className="mobile-container">
      
      {randomObjects &&
        randomObjects.map((product, index) => (
          <div key={index} className="product">
            <Link to={`/${product._id}`}>
            <div className="product-img">
              <img src={product.image[0]} alt="product" />
            </div>
            <div className="product-info">
            <p className="product-title "> {product.product_name}</p>
            <p>M.R.P.: ₹ <span className="retail-price">{product.retail_price}</span><span className="discount"> off { (((product.retail_price - product.discounted_price) /product.retail_price) * 100).toFixed(0) }%</span></p>
            <p>Sale Price: ₹ {product.discounted_price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
            </div>
            </Link>
          </div>
     
        ))}
    </div>
  </>
  )
}

export default AllCategoryProduct
