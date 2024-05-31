import React, { useEffect, useState } from "react";
// import Filterableproduct from "../Assets/Filterableproduct";
import { useParams } from "react-router-dom";
import "../Productdetailpage/productdetailpage.css";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import Coupanbanner1 from "../Assets/coupanbanner2.jpg";
import Accordion from "react-bootstrap/Accordion";
import "../Productdetailpage/bootstrapaccordian.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaTag } from "react-icons/fa";
import Slider from "react-slick";
import all_product from "../Assets/all_product";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { add } from "../../Store/cartSlice";






const Productdetailpage = () => {
  const location = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const [Count, Setcount] = useState(1);
  const [image, setImage] = useState("");
  // const [state, setState] = useState('')
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffelProduct = [...all_product].sort(() => Math.random() - 0.5);
    const random = shuffelProduct.slice(0, 5);
    setRandomProducts(random);
  }, [all_product]);

  const decrement = () => {
    Setcount(Count - 1);
  };

  const increment = () => {
    Setcount(Count + 1);
  };

  const handlecount = (e) => {
    Setcount(e.target.value);
  };

  const productdetailpageclick = (product) =>{
    navigate(`/${product.slug}/${product.id}`)
  }


  const addtoCart = (items) =>{
  dispatch(add(items))
  localStorage.setItem('cart',JSON.stringify(items))
  }


  return (
    <>
    <Navbar/>
    <div className="full-page-detail">
    <div className="product-detail-page">
      <div className="breadcrumbs">
        <a href="/">Home</a>
      </div>
      <div className="full-Product-detail-page">
        <div className="products-data-page">
          {all_product.map((items, i) => (
         
              <div className="product-image" key={i}>
                {items.id == location.id && (
                  <div className="product-detail-page-image-position">
                    <div className="leftimagessticky">

                 
                    <div className="Products-image-image">
                   
                     <img src={image ? image : items.image}  alt="" />
                    
                     
                      <div className="productdetail-image">
                        <div className="small-short-images">

                        
                        <img
                          src={items.image1}
                          alt=""
                          onClick={() => {
                            setImage(items.image1);
                          }}
                          onFocus={() => {
                            setImage(items.image1);
                          }}
                        />
                        <img
                          src={items.image2}
                          alt=""
                          onClick={() => {
                            setImage(items.image2);
                          }}
                          onFocus={() => {
                            setImage(items.image1);
                          }}
                        />
                        <img
                          src={items.image3}
                          alt=""
                          onClick={() => {
                            setImage(items.image3);
                          }}
                          onFocus={() => {
                            setImage(items.image1);
                          }}
                        />
                        <img
                          src={items.image1}
                          alt=""
                          onClick={() => {
                            setImage(items.image1);
                          }}
                          onFocus={() => {
                            setImage(items.image1);
                          }}
                        />
                        </div>
                      </div>
                      
                    </div>
                    </div>
                    <div className="product-detail-pageright">
                   
                    <div className="product-detail-name-data">
                      <h3>{items.name}</h3>
                      <div className="product-detail-page-wishlist">
                        <FaRegHeart className="heart-logo"/> Wishlist
                        <div className="product-detail-page-share">
                          | <IoIosShareAlt /> Share
                        </div>
                      </div>
                      <div className="product-detailpage-prices">
                        <div className="product-prices-prices">
                          <h4>₹ {items.new_price}</h4>
                          <h6>₹ {items.old_price}</h6>

                          <p>(incl. off all taxes)</p>
                        </div>
                      </div>
                      <hr />
                      <div className="coupan-banner">
                        <img
                          src={Coupanbanner1}
                          alt=""
                          style={{ height: "180px" }}
                        />
                      </div>
                      <div className="productdetail-page-offer">
                        <h6>
                          Best Offers <FaTag style={{ color: "red" }} />
                        </h6>
                        <div className="unorder-list">
                          <ul className="unorder-list-ul">
                            Best Price : {items.special_price}
                            <li>
                              Applicable on: Orders above Rs. 699 (only on first
                              purchase)
                            </li>
                            <li>Coupon code: MANN200</li>
                            <li>
                              Coupon Discount: Rs. 177 off (check cart for final
                              savings)
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-sizes">
                        <div className="product-size">
                          <h6>SIZE</h6>
                          <button>S</button>
                          <button>M</button>
                          <button>L</button>
                          <button>XL</button>
                          <button>XXL</button>
                        </div>
                      </div>
                      <div className="add-quantity">
                        <div className="add-quantity-name">
                          <h6>QUANTITY</h6>
                        </div>
                        <div className="add-quantity-buttons">
                          <button onClick={decrement}>-</button>
                          <input
                            type="text"
                            value={Count}
                            onChange={handlecount}
                          />
                          <button onClick={increment}>+</button>
                        </div>
                      </div>
                      <div className="addtocart-buynow-btn">
                        <div className="addtocart-btn">
                          <button onClick={()=> addtoCart(items)}>
                            <IoBagHandleOutline className="bag-icon" /> Add to
                            Bag
                          </button>
                        </div>
                        <div className="buynow-btn">
                          <button>Buy Now</button>
                        </div>
                      </div>
                      <div className="warranty-product">
                        <h6>
                          14 days easy return and exchange applicable for this
                          item
                        </h6>
                      </div>
                      <div className="delivery-check">
                        <h5>
                          DELIVERY OPTIONS
                          <CiDeliveryTruck className="delivery-icon" />
                        </h5>
                        <input type="text" placeholder="Enter Pincode" />
                        <p>
                          Please enter PIN code to check delivery time & Pay on
                          Delivery Availability
                        </p>
                      </div>

                      <div className="product-detail-page-description">
                        <Accordion defaultActiveKey="0" flush>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header className="accordian-title">
                              Overview
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Product Details</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Style Note</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>About Brand</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  
                    </div>
                  </div>
                )}
              </div>
       
          ))}
        </div>
      </div>
      <div className="Products-you-may-like">
        <div className="main-div-you-may-like">
          <h3>Products You May Like</h3>
        </div>
        <div className="youmaylike-row"   >
        {randomProducts.map((product) => (
 <div className="productyoumaylike"  onClick={() => productdetailpageclick(product)}  >
  <div className="product-you-make-likeinner-div" target="_blank">

  <img src={product.image} onClick={window.scrollTo(0,0)}alt="" />
            <p>{product.name}</p>
            <div className="product-you-may-like-prices">
              <h5> ₹ {product.new_price}</h5>
              <h6> ₹ {product.old_price}</h6> 
              <p>% OFF</p>
            </div>
         
          </div>
  </div>
         
         
        ))}
         </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};


export default Productdetailpage;
