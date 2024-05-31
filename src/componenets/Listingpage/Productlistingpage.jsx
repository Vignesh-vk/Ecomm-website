import React, { useRef } from "react";
import all_product from "../Assets/all_product";
import { useParams } from "react-router-dom";
import "../Listingpage/Productlistingpage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import Filterableproduct from "../Assets/Filterableproduct";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Productlistingpage = () => {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState('');
  const category = useParams();
  const navigate = useNavigate();
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const checkboxes = useRef([]);
  const [listingvisible, listingSetvisible] = useState(6);
  const [allProducts, setAllProducts] = useState([]);
  const [includeStock, setIncludeStock] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const handleCheckboxChange = () => {
    setIncludeStock(!includeStock);
  };
  const applyFilters = () => {
    const filteredProducts = all_product
      .filter((product) => {
        let categoryFilter
        if (!category.subcategory) {
          categoryFilter = product.category === category.slug;
        } else {
          categoryFilter = product.subcategory === category.subcategory;
        }
       
        const priceFilter =
          selectedPriceRanges.length === 0 ||
          selectedPriceRanges.some((range) => {
            const [minPrice, maxPrice] = range
              .split("-")
              .map((price) => Number(price));
            return (
              product.new_price >= minPrice &&
              (maxPrice === undefined || product.new_price <= maxPrice)
            );
          });
        const stockFilter = includeStock ? product.available === "yes" : true;
        return categoryFilter && priceFilter && stockFilter;
      })
      .sort((a, b) => {
        const dateA = a.createdAt
          ? new Date(a.createdAt)
          : new Date("1900-01-01");
        const dateB = b.createdAt
          ? new Date(b.createdAt)
          : new Date("1900-01-01");
        if (selectedSortOption === "lowToHigh") {
          return a.new_price - b.new_price;
        } else if (selectedSortOption === "highToLow") {
          return b.new_price - a.new_price;
        } else if (selectedSortOption === "newestFirst") {
          console.log(dateA);
          return dateB - dateA;
        } else {
          return 0;
        }
      });

    setAllProducts(filteredProducts);
  };
  useEffect(() => {
    applyFilters();
    if (previousLocation !== location.pathname) {
      // console.log(location.pathname);
      listingSetvisible(6);
      setPreviousLocation(location.pathname);
    }
  }, [location, selectedPriceRanges, includeStock, selectedSortOption]);

  const handleFilter = (range) => {
    const updatedSelectedRanges = selectedPriceRanges.includes(range)
      ? selectedPriceRanges.filter((selectedRange) => selectedRange !== range)
      : [...selectedPriceRanges, range];
    setSelectedPriceRanges(updatedSelectedRanges);
  };

  const cleardata = () => {
    checkboxes.current.forEach((checkbox) => (checkbox.checked = false));
    setSelectedPriceRanges([]);
  };

  const showmorelistingpageproducts = () => {
    listingSetvisible((prevValue) => prevValue + 3);
  };

  const openproductpage = (navi) => {
    navigate(`/${navi.slug}/${navi.id}`);
  };

  const handleSortChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  return (
    <>
    <Navbar/>  
      <div className="main-product-listing-page">
      <div className="inner-product-listing-page">
        <div className="uppar-listing-filter-option">
          <div className="header-filter-option">
            <div className="total-number-ofproducts">
              <p>{allProducts.length} options</p>
              <span>|</span>
              <div className="checkbox-instock">
                <input
                  type="checkbox"
                  name="instockproducts"
                  checked={includeStock}
                  onChange={handleCheckboxChange}
                  id=""
                />
                <p>Instock Products</p>
              </div>
            </div>
            <div className="sort-by-option">
              <p>Sort By</p>
              <select value={selectedSortOption} onChange={handleSortChange}>
                <option value="default">Default</option>
                <option value="newestFirst">New First</option>
                <option value="lowToHigh">Price Low to high</option>
                <option value="HightoLow">Price high to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row-testing">
        <div className="product-listingpage-filter">
          <div className="listing-page-price-filter">
            <h3>Price Range</h3>
            <h6 onClick={cleardata}>Clear all</h6>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => {
                    handleFilter("0-499");
                  }}
                  ref={(el) => (checkboxes.current[0] = el)}
                />{" "}
                under ₹ 499
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => {
                    handleFilter("499-999");
                  }}
                  ref={(el) => (checkboxes.current[1] = el)}
                />{" "}
                ₹ 499 - 999
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => {
                    handleFilter("1000-1999");
                  }}
                  ref={(el) => (checkboxes.current[2] = el)}
                />{" "}
                ₹ 1000 - 1999
              </li>
              <li>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => {
                    handleFilter("2000");
                  }}
                  ref={(el) => (checkboxes.current[3] = el)}
                />{" "}
                ₹ 2000 & Above
              </li>
            </ul>
          </div>
        </div>
        <div className="product-listingpage-row">
          {allProducts.length > 0 && (
            <>
              {allProducts
                .slice(0, listingvisible)
                .filter((item) => {
                  if (!category.subcategory) {
                    return item.category === category.slug;
                  } else {
                    return item.subcategory === category.subcategory;
                  }
                })
                .map((item, i) => (
                  <div
                    className="Product-listing-page-main-div"
                    onClick={() => openproductpage(item)}
                    key={i}
                  >
                    <div className="product-listing-page-image">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="product-listing-page-name">
                      <p>{item.name}</p>
                    </div>
                    <div className="product-listing-page-prices">
                      <h5>₹ {item.new_price}</h5>
                      <h6>₹ {item.old_price}</h6>
                    </div>
                  </div>
                ))}
              {allProducts.slice(0, listingvisible).length === 0 && 
                "No product found"}
            </>
          )}

          <div className="listing-page-loadmore-button" >
            {listingvisible < allProducts.length && (
              <button
                className="load-more-btn"
                onClick={showmorelistingpageproducts}
              >
                Load More..
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default Productlistingpage;
