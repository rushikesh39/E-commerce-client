// Navbar.js
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { setSearchProducts } from "../../Store/searchProduct";
import axios from "axios";
import { setProducts } from "../../Store/productSlice";
import { useSelector} from "react-redux";
import jwtDecode from "jwt-decode";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null;
  const [userName, setUserName] = useState(decodedToken ? decodedToken.userName : null);

  useEffect(() => {
    if (token && !userName) {
      try {
        setUserName(decodedToken.userName);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [token, userName, decodedToken]);


  const products = useSelector((state) => state.cartProduct.cartItems);
  console.log("cart count in nav", products.length);

  const dispatch=useDispatch()
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://ecommerce-server-hpa9.onrender.com/product/search', {
      params: { product_name: searchInput }
    });
      dispatch(setSearchProducts(response.data.products));
      dispatch(setProducts(response.data.products));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setSearchInput("")
  };


const logOut=()=>{
  console.log("fuction call",localStorage)
  localStorage.removeItem("token");
  setUserName(null);
}



  return (
    <div>
      <div className="mobile-nav">
      <MobileNav/>
      </div>
    
      <nav className="navbar">
        <div className="navbar-container">
          
          <div id="menu">
            <ul>
              <li>
              <div className="logo">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
          </div>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mobile">Mobile</Link>
                <ul>
                  <li>
                    <Link to='/mobile/apple'>Apple</Link>
                  </li>
                  <li>
                    <Link to={'/mobile/oppo'}>Oppo</Link>
                  </li>
                  <li>
                    <Link to={'/mobile/vivo'}>Vivo</Link>
                  </li>
                  <li>
                    <Link to={'mobile/oneplus'}>OnePlus</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/laptop">Laptop</Link>
                <ul>
                  <li>
                    <Link to={'/laptop/dell'}>Dell</Link>
                  </li>
                  <li>
                    <Link to={'/laptop/asus'}>Asus</Link>
                  </li>
                  <li>
                    <Link to={'/laptop/lenovo'}>Lenovo</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/fashion">Fashion</Link>
                <ul>
                  <li>
                    <Link to={'/fashion/Men'}>Men</Link>
                  </li>

                  <li>
                    <Link to={'/fashion/Women'}>Women</Link>
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
                    <Link to={'/footwear/Men'}>Men</Link>
                  </li>

                  <li>
                    <Link to={'/footwear/Women'}>Women</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="watches">Watches</Link>
                <ul>
                  <li>
                    <Link to={'/watches/Men'}>Men</Link>
                  </li>

                  <li>
                    <Link to={'/watches/Women'}>Women</Link>
                  </li>
                </ul>
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
              {userName?<span>{userName}</span>:<button>Login</button>}
              
            </Link>
            <Link onClick={logOut}>
            <button >LogOut</button>
            </Link>
            <Link to="/cart"> 
            <div className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} size="lg" />{products.length !== 0 && <div className="cart-count">{products.length}</div>}</div>
            </Link>
            
          </div>
          
                
            
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
