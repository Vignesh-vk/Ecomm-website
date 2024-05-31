import React from 'react'
import Banner1 from "../Assets/mainbanner1.jpg"
import Banner2 from "../Assets/mainbanner2.jpg"
import Banner3 from "../Assets/mainbanner3.jpg"
import '../Mainbanner/Mainbanner.css'
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Mainbanner/slickmaintheme.css'
import { Link } from 'react-router-dom'



const Mainbannersection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
      
      };

  return (

    
   
 <div className='Mainbanner-home-page'>
  <div className="banners">

  
        <Slider {...settings} className='homepage-banner-slick'  >
          <Link to="/shop/newarrival" className='Banner'>
           
            <img src={Banner1} alt="" />
          
          </Link>
          <div className='Banner'>
            <img src={Banner2} alt="" />

          </div>
          <div className='Banner'>
        <img src={Banner3} alt="" />
          </div>
          
        </Slider>
      </div>
      </div>
   
  )
}

export default Mainbannersection