// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import logo from "./logo.png";

const Navbar = () => {
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
              <input type="text" placeholder="Search Product..." />
              <button>Search</button>
            </div>
            <Link to="/cart">
              <button>Cart</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
