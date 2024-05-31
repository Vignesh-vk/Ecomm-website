import React from "react";
import ReactStars from "react-rating-stars-component";
import TestimonalBanner1 from "../Assets/product_20.png";
import TestimonalBanner2 from "../Assets/product_10.png";
import TestimonalBanner3 from "../Assets/product_16.png";
// import Slider from "react-slick";
// import "../Testimonals/Testimonalslicktheme.css";
import "../Testimonals/Testimonals.css";
import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

const testimonialData = [
  {
    "name": "Virat",
    "rating": 5,
    "description": "I recently purchased shirts from Shopnow and I love the quality. Love this clothing app! It offers a fantastic selection of styles and brands. The user interface is intuitive making it easy to browse and shop.",
    "img": TestimonalBanner1
  },
  {
    "name": "Nithin",
    "rating": 4.5,
    "description": "I completely love this site! Found it on EBay at first, now I just order directly through them. I am always complimented on my outfits. I will be back for more... Thank you for having cute trendy clothes that fit and look good.",
    "img": TestimonalBanner2
  },
  {
    "name": "Aisha Siddiqi",
    "rating": 5,
    "description": "This is my very first order through this site, and I am totally and completely satisfied! The fit is great and so are the prices. I will definitely return again and again...",
    "img": TestimonalBanner3
  },
  {
    "name": "Azam",
    "rating": 2,
    "description": "This is my very first order through this site, and I am totally and completely satisfied! The fit is great and so are the prices. I will definitely return again and again...",
    "img": TestimonalBanner1
  }
]

const Testimonals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,

    infinite: true,

    autoplay: true,
  };

  return (
    <div>
      <div className="hear-from-our-customer">
        <div className="heading">
          <h2>Hear from our customer</h2>
        </div>
      </div>

      <div className="cutomer-testimonals">

        <div className="testimonals-customer-review1">
          {/* <Slider {...settings}> */}
          <div className="main-testimonals">
         {testimonialData.map((data,index)=>(
            <div className="customer-testimonals-reviews">
              <div className="customer-image">
                <img src={data.img} alt="" />
              </div>
              <div className="customer-name">
                <h5>
                  {data.name} <MdVerified style={{ color: "blue" }} />{" "}
                </h5>
              </div>
              <ReactStars
    count={5}
    value={data.rating}
    size={24}
    isHalf={true}
    activeColor="#ffd700"
    edit={false}
  />
              <div className="testimonal-review">
                <p>
                  {data.description}
                </p>
              </div>
            </div>
          ))}
          </div>
          {/* </Slider> */}

        </div>

      </div>
    </div>
  );
};

export default Testimonals;
