import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { addToCartProduct,removeFromCart,incrementQuantity,decrementQuantity} from "../../Store/cartSlice";
import "./Cart.css";

function ShoppingCart() {
  const dispatch=useDispatch()
  const cartProduct = useSelector(addToCartProduct);
  const products = cartProduct.payload.cart.cartProducts;
  console.log("products",products);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        const username = decodedToken.email;
        const expirationTime = decodedToken.exp;
        const currentTime = Math.floor(Date.now() / 1000);

        if (expirationTime > currentTime) {
          setUserName(username);
          console.log("username", userName);
          console.log("Token is valid");
          axios.get("https://ecommerce-server-hpa9.onrender.com/cart", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          alert("Session expired");
          navigate("/login");
          console.log("Token has expired");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
      console.log("Token is missing");
    }
  }, [token, navigate, userName]);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
    console.log("fuction call")
  };
  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const calculatePriceDetails = () => {
    const subtotal = products.reduce(
      (accumulator, product) => accumulator + product.discounted_price * product.quantity,
      0
    );

    const totalDiscount = products.reduce(
      (accumulator, product) =>
        accumulator + (product.retail_price - product.discounted_price) * product.quantity,
      0
    );

    const deliveryCharges = 40;
    const totalAmount = subtotal - totalDiscount + deliveryCharges;

    return {
      subtotal,
      totalDiscount,
      deliveryCharges,
      totalAmount,
    };
  };

  const { subtotal, totalDiscount, deliveryCharges, totalAmount } = calculatePriceDetails();

  // ... (other code)
  

  return (
    <div>
      <div className="main-container">
        <div className="cart-container">
        <h3>My Cart</h3>
        {products &&
          products.map((item, index) => (
            <div className="cart-product" key={index}>
              
              <div className="cart-img">
              { Array.isArray(item.image) ? <img  src={item.image[0]} alt="product img"/>:<img className='dynamic-img' src={item.image} alt="product img" />}
                
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
                <div class="quantity-container">
                  <button onClick={() => handleDecrement(item._id)} class="quantity-btn" id="decrement">
                    -
                  </button>
                  <span class="quantity-value" id="quantity">
                  {item.quantity}
                  </span>
                  <button onClick={() => handleIncrement(item._id)} class="quantity-btn" id="increment">
                    +
                  </button>
                </div>
                <button onClick={() => handleRemove(item._id)} className="remove">Remove</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="price-details">
        <h2>Price Details</h2>
        <p>Subtotal: ₹ {subtotal}</p>
        <p>Total Discount: ₹ {totalDiscount}</p>
        <p>Delivery Charges: ₹ {deliveryCharges}</p>
        <p>Total Amount: ₹ {totalAmount}</p>
      </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
