import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, selectProducts } from "../../Store/productSlice";
import axios from "axios";
import "../Mobile/Mobile.css";
import { Link,useParams } from "react-router-dom";

const Fashion = () => {
  const { category} = useParams();
  console.log("product category",category)
  const dispatch = useDispatch();
  const product  = useSelector(selectProducts);
  const products=product.filter(item=>item.product_category_tree[0].includes("Clothing"))
  console.log("Fashion", products);


  const categoryProduct = products.filter((item) =>
    item.product_name.includes(category)
  );
console.log("category product",categoryProduct)
  useEffect(() => {
    if(products.length<20){
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://ecommerce-server-hpa9.onrender.com/product/fashion");
          console.log(response);
          dispatch(setProducts(response.data.products)); // Dispatch the fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchProducts();
    }

    
      }, [dispatch,products]);

  return (
    <div>
      <div className="mobile-container">
      {category && <h2>{category}'s Fashion products</h2>}
        {categoryProduct &&
          categoryProduct.map((product, index) => (
            <div key={index} className="product">
            
              <Link to={`/${product._id}`}>
                <div className="product-img">
                  <img src={product.image[0]} alt="product" />
                </div>
                <div className="product-info">
                  <p className="product-title "> {product.product_name}</p>
                  <p>
                    M.R.P.: ₹{" "}
                    <span className="retail-price">{product.retail_price}</span>{" "}
                    <span className="discount">
                      {" "}
                      off{" "}
                      {(
                        ((product.retail_price - product.discounted_price) /
                          product.retail_price) *
                        100
                      ).toFixed(0)}
                      %
                    </span>
                  </p>
                  <p>Sale Price: ₹ {product.discounted_price}</p>
                  <button className="add-to-cart-button">Add to Cart</button>
                </div>
              </Link>
            </div>
          ))}
      </div>
      
      
    <h1>Product List</h1>
    <div className="mobile-container">
      
      {products &&
        products.map((product, index) => (
          <div key={index} className="product">
            <Link to={`/${product._id}`}>
            <div className="product-img">
              <img src={product.image[0]} alt={product.image[0]} />
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
    
  );
};

export default Fashion;
