import React from "react";
import { CgMediaLive } from "react-icons/cg";
import "../Navbar/Livescrollingoffer.css";
import Slider from "react-slick";



const Livescrollingoffer = () => {







  const settings = {
    
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="sale-section">
          <div className="scrolling-offer">
            <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6>
            <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6>
            <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6>
            <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6>
            <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6>
            <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6>
            <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6>
            <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6>
            <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6> <h6>
              Sale is Live <CgMediaLive style={{ color: "white" }} />
            </h6>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Livescrollingoffer;
