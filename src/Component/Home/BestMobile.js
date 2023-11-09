import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from "react-redux";
import {selectProducts } from "../../Store/productSlice";
import "./Slider.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",zIndex:"1" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", justifyContent:"center",alignContents:"center", background: "black",zIndex:"1" }}
      onClick={onClick}
    />
  );
}
function BestMobile() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };
const product=useSelector(selectProducts)


const mobiles=product.filter(item=>item.product_category_tree[0].includes("mobile"))
console.log("best mobile",mobiles)

const randomObject=[];
const useIndexes=new Set();

while(randomObject.length<6){
  
  const randomIndex=Math.floor(Math.random()*mobiles.length)
  if(!useIndexes.has(randomIndex)){
    useIndexes.add(randomIndex);
    randomObject.push(mobiles[randomIndex]);
    console.log("random object",randomObject)
  }
}
const random = mobiles[Math.floor(Math.random() * mobiles.length)];
  console.log(random);




  return (
    <div className='best-mobile-container'>
      <div className="best-mobile-slider-container">
        
      <Slider {...settings}>
      {randomObject &&randomObject.map((item,index)=>(
        <div key={index} className='best-mobile-slide'>
        <img className="best-mobile-slide-image" src={item.image} alt="Slide img" />
      </div>
      ))}
        
      </Slider>
    </div>
    </div>
  );
}

export default BestMobile
