import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import new_collections from "../Assets/new_collections";
import "../Newarrival section/Newarrival.css";
import Filterableproduct from "../Assets/Filterableproduct";


const Newarrival = () => {
  const navigate = useNavigate();

  const products = (product) => {
    navigate(`/detail/${product.id}`);
  };


  return (
    <div className="summer-collection-main-div">
      <div className="summer-collection-category">
        <div className="summer-category-tittle">
          <h6>SUMMER COLLECTION </h6>
        </div>
        <div className="summer-collection-heading">
          <h1>New Arrival</h1>
        </div>
      </div>

      {/* collection section         */}

      <div className="newarrival-cloth-section">
        <div className="newarrival-products">
          {new_collections.map((data, i) => (
            <div className="newarrival-background" onClick={() => {
              products(data);
            }}>
              {data.id && (
              <div className="collection" key={i} >
             
                <img src={data.image} alt="" />
                <div className="newarrival-product-name">
                  <h6>{data.name}</h6>
                </div>
                <div className="newarrival-product-prices">
                  <h6 className="new-price">₹ {data.new_price}</h6>
                  <h6 className="old-price"> MRP {data.old_price}</h6>
                  <h6 className="offerpercentage">
                    ({data.offerpercentage}% off)
                  </h6>
                </div>
               
              </div>
              )} 
          
            </div>
            
          ))}
        </div>
      </div>
    
    </div>
    

  );
};

export default Newarrival;
