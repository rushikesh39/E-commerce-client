import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
function DealofDay() {
  
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  return (
    <div className='container'>
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="slide-image" src="" alt="Slide 1" />
        </div>
        <div>
          <img className="slide-image" src="" alt="Slide 2" />
        </div>
        <div>
          <img className="slide-image" src="" alt="Slide 3" />
        </div>
        <div>
          <img className="slide-image" src="" alt="Slide 4" />
        </div>
        <div>
          <img className="slide-image" src="" alt="Slide 5" />
        </div>
        <div>
          <img className="slide-image" src="" alt="Slide 6" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
    </div>
  );
}

export default DealofDay
