// Navbar.js
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import logo from "./logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { setSearchProducts } from "../../Store/searchProduct";
import axios from "axios";
import { setProducts } from "../../Store/productSlice";


const Navbar = () => {
  const dispatch=useDispatch()
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/product/search', {
      params: { product_name: searchInput }
    });
      dispatch(setSearchProducts(response.data.products));
      dispatch(setProducts(response.data.products));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setSearchInput("")
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">{/* <img src={logo} alt="Logo" /> */}</Link>
          </div>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mobile">Mobile</Link>
                <ul>
                  <li>
                    <Link>Apple</Link>
                  </li>
                  <li>
                    <Link>Oppo</Link>
                  </li>
                  <li>
                    <Link>Vivo</Link>
                  </li>
                  <li>
                    <Link>OnePlus</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/laptop">Laptop</Link>
                <ul>
                  <li>
                    <Link>Apple</Link>
                  </li>
                  <li>
                    <Link>Dell</Link>
                  </li>
                  <li>
                    <Link>Asus</Link>
                  </li>
                  <li>
                    <Link>Lenova</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/fashion">Fashion</Link>
                <ul>
                  <li>
                    <Link>Men</Link>
                  </li>

                  <li>
                    <Link>Women</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/jwelary">Jewellery</Link>
              </li>
              <li>
                <Link to="/footwear">Footwear</Link>
                <ul>
                  <li>
                    <Link>Men</Link>
                  </li>

                  <li>
                    <Link>Women</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="watches">Watches</Link>
              </li>
            </ul>
          </div>
          <div className="nav-links">
            <div className="search-bar">
              <input type="text" placeholder="Search Product..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
             <Link to="/search">
             <button onClick={handleSearch}>Search</button>
             </Link> 
            </div>
           
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/cart"> <FontAwesomeIcon icon={faShoppingCart} size="lg" /></Link>
            
          </div>
          
                
            
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
