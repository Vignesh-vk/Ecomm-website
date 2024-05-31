import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Filterablegalleryproduct/Filterproducts.css";
import Filterableproduct from "../Assets/Filterableproduct";

const Filterproducts = () => {
  const navigate = useNavigate();
  const [items, Setitems] = useState(Filterableproduct);
  const [visible, Setvisible] = useState(10);

  const showmoreproducts = () => {
    Setvisible((prevValue) => prevValue + 5);
  };

  const filterItem = (category) => {
    const UpdatedItems = Filterableproduct.filter((currentelem) => {
      return currentelem.category === category;
    });

    Setitems(UpdatedItems);
  };

  const product = (product) => {
    navigate(`/${product.slug}/${product.id}`);
  };

  return (
    <div>
      <div className="filter-home-page">
        <div className="filter-home-page-category">
          <div className="filter-home-page-title">
            <h1>T</h1>
            <h3>rending</h3>
            <p>
              Fashion speaks louder <br /> than words.
            </p>
          </div>

          <div className="filter-home-page-category">
            <ul className="category-list">
              <li
                className="category-filter-btn"
                onClick={() => Setitems(Filterableproduct)}
              >
                ALL
              </li>
              <li
                className="category-filter-btn"
                onClick={() => filterItem("men")}
              >
                MEN
              </li>
              <li
                className="category-filter-btn"
                onClick={() => filterItem("women")}
              >
                WOMEN
              </li>
              <li
                className="category-filter-btn"
                onClick={() => filterItem("kid")}
              >
                KIDS
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr-line" />
      </div>
      <div className="filter-home-page-products">
        <div className="category-products">
          {items.slice(0, visible).map((elem) => {
            const { name, image, new_price, old_price } = elem;

            return (
              <div
                className="filter-products-main-div"
                onClick={() => {
                  product(elem);
                }}
              >
                {/* <a href="/Detail"> */}
                <div className="filter-products-images">
                  <img src={image} alt="filterproducts" />
                </div>
                <div className="filter-products-names">
                  <p>{name}</p>
                </div>
                <div className="filter-products-prices">
                  <div className="filter-products-new-prices">
                    <h5>{new_price}</h5>
                  </div>
                  <div className="filter-products-old-prices">
                    <h6>{old_price}</h6>
                  </div>
                </div>
                {/* </a> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="loader"></div>
      <div className="fiter-product-load-more-button">
        {visible < items.length && (
          <button className="loadmorebutton" onClick={showmoreproducts}>
            Load More...
          </button>
        )}
      </div>
    </div>
  );
};

export default Filterproducts;
