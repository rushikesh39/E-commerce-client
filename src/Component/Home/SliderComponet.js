
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Optional: Add your custom styles

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
    <div className='container'>
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="slide-image" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ee78de50f9dbe993.jpg?q=20" alt="Slide 1" />
        </div>
        <div>
          <img className="slide-image" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2f1b3957c095a754.jpg?q=20" alt="Slide 2" />
        </div>
        <div>
          <img className="slide-image" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5df65ad101e18dbf.jpg?q=20" alt="Slide 3" />
        </div>
        <div>
          <img className="slide-image" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/10afacd24f63e5a4.jpg?q=20" alt="Slide 4" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
    </div>
    
  );
};

export default SliderComponent;
