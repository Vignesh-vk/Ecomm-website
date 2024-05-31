import React from 'react'
import Slider from "react-slick";
import '../ProductsSlider/Productsslider.css'
import "../ProductsSlider/slicktheme.css";
import Banner1 from "../Assets/collection_banners/collection1.webp"
import Banner2 from "../Assets/collection_banners/collection2.webp"
import Banner3 from "../Assets/collection_banners/collection3.webp"
import Banner4 from "../Assets/collection_banners/collection4.webp"
import Banner5 from "../Assets/collection_banners/collection5.webp"
import Banner6 from "../Assets/collection_banners/collection6.webp"
import Banner7 from "../Assets/collection_banners/collection7.webp"
import Banner8 from "../Assets/collection_banners/collection8.webp"
import Banner9 from "../Assets/collection_banners/collection9.webp"
import Bestbrandbanner from "../Assets/bestbrandbanner.webp"


  


const Productsslider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        className: "center",
        infinite: true,
        centerPadding: "40px",
        autoplay : true,
        // afterChange: function(index) {
        //   console.log(
        //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //   );
        // }
      
      
      };


  return (
            <div className="products-slider">
          <div className="best-brand-banner">
           <img src={Bestbrandbanner} alt="" />
        <Slider {...settings}>
          <div className='Collection-banners'>
           <img src={Banner1} alt="" />
          </div>
          <div className='Collection-banners'>
           <img src={Banner2} alt="" />
          </div><div className='Collection-banners'>
           <img src={Banner3} alt="" />
          </div><div className='Collection-banners'>
           <img src={Banner4} alt="" />
          </div><div className='Collection-banners'>
           <img src={Banner5} alt="" />
          </div><div className='Collection-banners'>
           <img src={Banner6} alt="" />
          </div><div className='Collection-banners'>
           <img src={Banner7} alt="" />
          </div><div className='Collection-banners'>
           <img src={Banner8} alt="" />
          </div><div className='Collection-banners'>
           <img src={Banner9} alt="" />
         </div>
         
        
        </Slider>
        </div>
      </div>

     
    
    
  )
}

export default Productsslider