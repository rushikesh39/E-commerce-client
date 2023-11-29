import React, { useState } from "react";
import Logo from "./logo.png";
import { NavLink, Link } from "react-router-dom";
import "./MobileNav.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { setProducts } from "../../Store/productSlice";
import { useDispatch } from "react-redux";
import { setSearchProducts } from "../../Store/searchProduct";
import axios from "axios";
import { useSelector} from "react-redux";
function MobileNav() {
  const [displayNav, SetdisplayNav] = useState(false);
  const display = () => {
    SetdisplayNav(!displayNav);
  };
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce-server-hpa9.onrender.com/product/search",
        {
          params: { product_name: searchInput },
        }
      );
      dispatch(setSearchProducts(response.data.products));
      dispatch(setProducts(response.data.products));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setSearchInput("");
  };
  const products = useSelector((state) => state.cartProduct.cartItems);
  return (
    <>
      <div className="nav-mobile-container">
        <div className="logo-and-hambugger">
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
        
          <div className="icon" >
          <div className="cart-icon-container">
          <Link to="/cart"> 
            <div className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} size="lg" />{products.length !== 0 && <div className="cart-count">{products.length}</div>}</div>
            </Link>
          </div>
            {" "}
            <FontAwesomeIcon onClick={display} icon={faAlignJustify} />
          </div>
          
        </div>

        <div className="mobile-search-bar">
          <input
            type="text"
            placeholder="Search Product..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Link to="/search">
            <button onClick={handleSearch}>Search</button>
          </Link>
       
        </div>
      </div>

      {displayNav && (
        <div className="shownav" onClick={()=>SetdisplayNav(false)}>
          <NavLink to="/">Home</NavLink>
          <hr />
          <NavLink to="/mobile">Mobile</NavLink>
          <hr />
          <NavLink to="/laptop">Laptop</NavLink>
          <hr />
          <NavLink to="/fashion">Fashion</NavLink>
          <hr />
          <NavLink to="/jwelary">Jewellery</NavLink>
          <hr />
          <NavLink to="/footwear">Footwear</NavLink>
          <hr />
          <NavLink to="/watches">Watches</NavLink>
        </div>
      )}
    </>
  );
}

export default MobileNav;
