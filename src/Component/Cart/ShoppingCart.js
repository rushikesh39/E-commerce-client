import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import "./Cart.css";
import CartProduct from "./CartProduct";
import { addToCart } from "../../Store/cartSlice";
import { useDispatch,useSelector } from "react-redux";

function ShoppingCart() {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // const [userCart, setUserCart] = useState(null);
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const username = decodedToken.email;
        const expirationTime = decodedToken.exp;
        const currentTime = Math.floor(Date.now() / 1000);

        if (expirationTime > currentTime) {
          setEmail(username);
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
  }, [token, navigate, email]);




  const products = useSelector((state) => state.cartProduct.cartItems);


  useEffect(() => {
    const decodedToken = jwtDecode(token);
        const email = decodedToken.email;
        
          const fetchProducts = async () => {
            try {
              const response = await axios.get(`https://ecommerce-server-hpa9.onrender.com/product/cartdetails?email=${email}`);
              const arr=[...response.data.cart.products]
              console.log("get response datA",response.data.cart.products,arr);
              dispatch(addToCart(...arr))
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchProducts();

        
   
  }, [email,token,dispatch,products]);
  return (
    <div>
     <CartProduct/>
    </div>
  );
}

export default ShoppingCart;
