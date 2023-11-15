import React from 'react';
import "./App.css";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Component/Home/Home';
import ShoppingCart from './Component/Cart/ShoppingCart';
import RegisterLogin from './Register&Login';
import Mobile from './Component/Mobile/Mobile';
import Computer from './Component/Laptop/Computer';
import Jwelary from './Component/Jwelary/Jwelary';
import Fashion from './Component/Fashion/Fashion';
import Watches from './Component/Watches/Watches';
import Footwear from './Component/Footwear/Footwear';
import Navbar from './Component/Nav/NavBar';
import Dynamic from './Component/Dynamic/Dynamic';
import Footer from './Component/Footer/Footer';
import Search from './Component/SearchResult/SearchResult';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' element={<RegisterLogin/>}/>
          <Route path='/cart' element={<ShoppingCart/>}/>
          <Route path='/mobile' element={<Mobile/>}/>
          <Route path='/mobile/:category' element={<Mobile/>}/>
          <Route path='/:id' element={<Dynamic/>}/>
          <Route path='/laptop' element={<Computer/>}/>
          <Route path='/laptop/:category' element={<Computer/>}/>
          <Route path='/jwelary' element={<Jwelary/>}/>
          <Route path='/fashion' element={<Fashion/>}/>
          <Route path='/fashion/:category' element={<Fashion/>}/>
          <Route path='/watches' element={<Watches/>}/>
          <Route path='/watches/:category' element={<Watches/>}/>
          <Route path='/footwear' element={<Footwear/>}/>
          <Route path='/footwear/:category' element={<Footwear/>}/> 
          <Route path='/search' element={<Search/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;



