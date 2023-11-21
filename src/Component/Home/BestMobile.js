import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../Store/productSlice";
import { Link } from "react-router-dom";
import "./Product.css";

function BestMobile() {
  const product = useSelector(selectProducts);
  console.log("all category product", product);
  const products = product.filter(
    (item) => item.product_category_tree[0] === "mobile"
  );
  const unique=new Set([...products])
  console.log(" set ",unique)
  const myArray =[...unique];
  console.log("unique array",myArray)

  function getRandomObjects(arr, count) {
    const randomObjects = [];
    const totalObjects = arr.length;
    count = Math.min(count, totalObjects);

    while (randomObjects.length < count) {
      const randomIndex = Math.floor(Math.random() * totalObjects);
      const randomObject = arr[randomIndex];

      if (!randomObjects.includes(randomObject)) {
        randomObjects.push(randomObject);
      }
    }

    return randomObjects;
  }

  const randomObjects = getRandomObjects(myArray, 5);

  console.log(randomObjects);

  return (
    <>
      <div className="mobile-container">
        {randomObjects &&
          randomObjects.map((product, index) => (
            <div className="product" key={index}>
              <Link to={`/${product._id}`}>
                <div className="product-img">
                  <img src={product.image[0]} alt="product" />
                </div>
                <div className="product-info">
                  <p className="product-title "> {product.product_name}</p>
                  <p>
                    M.R.P.: ₹{" "}
                    <span className="retail-price">{product.retail_price}</span>
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
    </>
  );
}

export default BestMobile;
