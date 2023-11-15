
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Optional: Add your custom styles

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{  margin:0,
        padding:0,
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        zIndex: "1",
        cursor: "pointer",  }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        margin:0,
        padding:0,
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        zIndex: "1",
        cursor: "pointer", 
      }}
      onClick={onClick}
    >
     
    </div>
  );
}

const SliderComponent = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  return (
    <div className=''>
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="slide-image" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/42e1272ed0854e8e.jpeg?q=20" alt="Slide 1" />
        </div>
        <div>
          <img className="slide-image" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/fdfc83e8428467d2.jpg?q=20" alt="Slide 2" />
        </div>
        <div>
          <img className="slide-image" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/beff801f5425a797.jpg?q=20" alt="Slide 3" />
        </div>
        <div>
          <img className="slide-image" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e9c37c2cf2570f1a.jpg?q=20" alt="Slide 4" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
    </div>
    
  );
};

export default SliderComponent;
