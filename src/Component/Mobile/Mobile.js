import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, selectProducts } from "../../Store/productSlice";
import axios from "axios";
import "./Mobile.css";
import { Link } from "react-router-dom";

const Mobile = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectProducts);
  const products = product.filter(
    (item) => item.product_category_tree[0] === "mobile"
  );
  console.log("mobiles", products);
  const apple = products.filter((item) =>
    item.product_name.toLowerCase().includes("apple")
  );
  console.log("apple Product", apple);
  const oppo = products.filter((item) =>
    item.product_name.toLowerCase().includes("oppo")
  );
  console.log("Oppo Product", oppo);
  const vivo = products.filter((item) =>
    item.product_name.toLowerCase().includes("vivo")
  );
  console.log("vivo Product", vivo);
  const oneplus = products.filter((item) =>
    item.product_name.toLowerCase().includes("oneplus")
  );
  console.log("onePlus Product", oneplus);
  const redmi = products.filter((item) =>
    item.product_name.toLowerCase().includes("redmi")
  );
  console.log("redmi Product", redmi);
  const samsung = products.filter((item) =>
    item.product_name.toLowerCase().includes("samsung")
  );
  console.log("samsung Product", samsung);

  useEffect(() => {
    if (products.length <20) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            "https://ecommerce-server-hpa9.onrender.com/product/mobile"
          );
          console.log(response);
          dispatch(setProducts(response.data.products)); // Dispatch the fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchProducts();
    }
  }, [dispatch, products]);

  return (
    <div>
      <h1>Product List</h1>
      <div className="mobile-container">
        {products &&
          products.map((product, index) => (
            <div key={index} className="product">
              <Link to={`/mobile/${product._id}`}>
                <div className="product-img">
                  <img src={product.image} alt="product" />
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
    </div>
  );
};

export default Mobile;
