
import React from 'react'
import { useSelector } from 'react-redux'
import { selectSearchProducts } from '../../Store/searchProduct'
import { Link } from "react-router-dom";
function SearchResult() {
  const products=useSelector(selectSearchProducts)
  console.log("search Product",products)
  
  return (
    <div>
      <h1>Product List</h1>
    <div className="mobile-container">
      
      {products &&
        products.map((product, index) => (
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
    </div>
  )
}

export default SearchResult
