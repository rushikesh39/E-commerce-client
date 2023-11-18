import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import jwtDecode from "jwt-decode";
// import { useEffect } from "react";
// import axios from "axios";

import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../../Store/cartSlice";
const CartProduct = () => {
  // const token = localStorage.getItem("token");
  // const decodedToken = jwtDecode(token);
  // const email = decodedToken.email;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartProduct.cartItems);
  console.log("cart Item data", products);
 

    //  const updateProducts = async () => {
    //   try {
    //     const response = await axios.post(
    //       "https://ecommerce-server-hpa9.onrender.com/product/insert_cart_data",
    //       { email: email, product: products }
    //     );
    //     console.log(response);
  
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

   

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ productId: id }));
    // updateProducts()
     
  };
  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ productId: id }));
    // updateProducts()
  };
  const handleRemove = (id) => {
    dispatch(removeProduct({ productId: id }));
    // updateProducts()
  };

  const subtotal = products.reduce(
    (total, item) => total + item.retail_price * item.quantity,
    0
  );

  const totalDiscount = products.reduce(
    (total, item) =>
      total + (item.retail_price - item.discounted_price) * item.quantity,
    0
  );

  const deliveryCharges = 49; // You can adjust this based on your logic
  const totalAmount = subtotal - totalDiscount + deliveryCharges;

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:5000/product/insert_cart_data",
  //         { email: email, product: products }
  //       );
  //       console.log(response);
  
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [email,products]);

  const handleCheckout = () => {};

  return (
    <div>
      <div className="main-container">
        <div className="cart-container">
          <h3>
            {" "}
            <FontAwesomeIcon icon={faShoppingBag} size="lg" /> My Products
          </h3>

          {products.length > 0 ? (
            products.map((item, index) => (
              <div className="cart-product" key={index}>
                <div className="cart-img">
                  {Array.isArray(item.image) ? (
                    <img src={item.image[0]} alt="product img" />
                  ) : (
                    <img
                      className="dynamic-img"
                      src={item.image}
                      alt="product img"
                    />
                  )}
                </div>
                <div className="cart-details">
                  <p>{item.product_name}</p>
                  <p>
                    M.R.P.: ₹{" "}
                    <span className="retail-price">{item.retail_price}</span>
                    <span className="discount">
                      {" "}
                      off{" "}
                      {(
                        ((item.retail_price - item.discounted_price) /
                          item.retail_price) *
                        100
                      ).toFixed(0)}
                      %
                    </span>
                  </p>
                  <p>Sale Price: ₹ {item.discounted_price}</p>
                  <div className="quantity-container">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="quantity-btn"
                      id="decrement"
                    >
                      -
                    </button>
                    <span className="quantity-value" id="quantity">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="quantity-btn"
                      id="increment"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty">
              <h2>Your cart is Empty</h2>
            </div>
          )}
        </div>

        <div className="price-details">
          <h2>Price Details</h2>
          <p>Subtotal: ₹ {subtotal}</p>
          <p>Total Discount: ₹ {totalDiscount}</p>
          <p>Delivery Charges: ₹ {deliveryCharges}</p>
          <hr />
          <p>Total Amount: ₹ {totalAmount}</p>
          <button onClick={handleCheckout}>checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
