import React, { useState, useRef, useEffect } from "react";
import "../Navbar/Navbar.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import Livescrollingoffer from "./Livescrollingoffer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import loginbanner1 from "../Assets/loginbanner.jpg"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Googleicon from "../Assets/googleicon.jpg"
import facebookicon from "../Assets/facebookicon.png"
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/loginbootstrapaccordian.css"
import all_product from "../Assets/all_product";
import { useSelector } from "react-redux";





const menulist = [
  {
    id: 1,
    title: "Tshirt",
  },
  {
    id: 2,
    title: "shirts",
  },
  {
    id: 3,
    title: "shoes",
  },
  {
    id: 4,
    title: "sweatshirts",
  },
  {
    id: 5,
    title: "watches",
  },
  {
    id: 6,
    title: "jackets",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const cartproducts = useSelector(state => state.cart);

  const [filterValue, setFilterValue] = useState("")
  const [dropdown, setDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [signupState, setSignupState] = useState(false)
  const onMouseEnter = (e) => {
    setActiveDropdown(e)
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setActiveDropdown(null)
    setDropdown(false);
  }
  const [show, setShow] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [type, setType] = useState('password');


  const togglePassword = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  const handleSignup = () => {
    setSignupState(!signupState)
  }

  const handleClear = () => {
    setFilterValue("")
    setFilterData([])
  }


  const Searchproduct = (e) => {
    setFilterValue(e.target.value)
    if (e.target.value === "") {
      setFilterData([])
    } else {
      const filter = all_product.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setFilterData(filter)
    }
  }

  const opencartpage = () => {
    navigate(`/cart`)
  }

  const opendetailpage = (item) => {
    setFilterValue("")
    setFilterData([])
    navigate(`/${item.slug}/${item.id}`)
  }


  return (
    <>
      <div className="Navbar">

        <div className="second-ul-list">
          <div className="customercare-mail-id">
            <h6>
              <CiMail style={{ marginRight: "8px", fontSize: "20px" }} />
              shopcart@gmail.com
            </h6>
          </div>
          <div className="ccnumber">
            <h6>
              <FaPhone style={{ marginRight: "8px" }} />
              9876543211
            </h6>
          </div>
          <div className="tract-order">
            <CiDeliveryTruck style={{ marginRight: "8px", fontSize: "29px" }} />
            <span>Track Order</span>
          </div>
          <div className="wishlist-icon">
            <FaRegHeart style={{ marginRight: "8px", fontSize: "20px" }} />
            <span>Wishlist</span>
          </div>
          <div className="help">
            <span>
              <FaRegQuestionCircle
                style={{ marginRight: "8px", fontSize: "20px" }}
              />
              Help
            </span>
          </div>
        </div>
        <div className="main-navbar">
          <div className="text-logo">
            <Link className="Textcolor" to="/">
              <h2>Shop Now</h2>
              <hr />
              <h4>Best Collection</h4>
            </Link>
          </div>
          <div className="search-bar">
            <input
              type="text"
              alt="search box"
              onChange={(e) => {
                Searchproduct(e);
              }}
              value={filterValue}
              // ref={inputRef}

              placeholder="Search.."
            />
            {filterData.length > 0 && (
              <ul className="search-list" >
                {filterData.map((item) => (
                  <div className="list-data-main-div"  >
                    <li className="search-data-list" onClick={() => { opendetailpage(item) }} key={item.id} >{item.name}</li>
                  </div>
                ))}
              </ul>
            )}
            {filterValue === "" ?
              <CiSearch
                style={{
                  position: "relative",
                  top: "0px",
                  left: "0px",
                  marginLeft: "-30px",
                }}
              /> :
              <p className="closesearch-dropdown" onClick={() => { handleClear() }}>x</p>}
          </div>




          <ul className="Menu-items">
            <li className="menu-list">
              <Link to="/shop/newarrival" className="menulist-sub-category">New Arrival</Link>
            </li>
            <li
              className="menu-list"
              onMouseEnter={() => {
                onMouseEnter(1);
              }}
              onMouseLeave={onMouseLeave}
            >
              <Link className="menulist-sub-category" to="/shop/men">Men</Link>
              {dropdown && activeDropdown === 1 && (
                <ul className="dropdown-menu-list">
                  {menulist.map((items, index) => {
                    return (
                      <li key={index}>
                        <a>{items.title}</a>

                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            <li className="menu-list">

              <Link to="/shop/women" className="menulist-sub-category">Women</Link>
              <ul id="Submenu">
                <li className="submenu-list">
                  <Link to="/shop/women/Womens-tshirt">Tshirts</Link>
                </li>
                <li className="submenu-list">
                  <Link to="/shop/women/jacket">Jacket</Link>
                </li>
                <li className="submenu-list">Tops</li>
                <li className="submenu-list">Dresses</li>
                <li className="submenu-list">Sarees</li>
                <li className="submenu-list">Dupatta</li>
              </ul>
            </li>
            <li className="menu-list">
              <Link to="/shop/kid" className="menulist-sub-category">Kids</Link></li>

          </ul>

          <div className="user-login">
            <a variant="none" onClick={handleShow}>
              <CgProfile
                className="profile-logo"
                style={{ fontSize: "25px" }}
              />
            </a>
            <div className="modal-popup">


              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  {signupState == false ? (
                    <div className="loginpopup">
                      <div className="login-banner-img">
                        <img src={loginbanner1} alt="" />
                      </div>
                      <div className="login-registration">
                        <div className="login-heading">
                          <h5>Login</h5>
                          <p>Track your order, create wishlist & more</p>
                        </div>
                        <div className="login-details">
                          <input type={"text"} placeholder="Email ID/Mobile No" />
                          <input type={type} placeholder="Password" />
                          <button
                            className="Hideshowbtn"
                            onClick={togglePassword}
                          >
                            {type === "password" ? <FaEye /> : <FaEyeSlash />}
                          </button>
                          <div className="forget-password">
                            <p>Forget Password ?</p>
                            <div className="login-using-otp">
                              <h6 className="login-otp">Login using OTP</h6>
                            </div>
                          </div>
                          <div className="login-button">
                            <button>Login</button>
                          </div>
                          <div className="Signup-link" onClick={handleSignup}>
                            <p>New to ShopNow?</p>
                            <a className="Registration-link">Register Here </a>
                          </div>
                          <hr className="login-hr-line" />
                          <div className="login-google-links">
                            <h6>
                              Or Continue With{" "}
                              <img
                                src={Googleicon}
                                style={{ width: "40px" }}
                                alt=""
                              />{" "}
                              <img src={facebookicon} style={{ width: "20px" }} />{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>

                  ) : (

                    <div className="registerpopup" show={show} onHide={handleClose}>

                      <div className="register-banner-img">
                        <img src={loginbanner1} alt="" />
                      </div>
                      <div className="register-registration">
                        <div className="register-heading">
                          <h5>Register</h5>
                          <p>Track your order, create wishlist & more</p>
                        </div>
                        <div className="register-details">
                          <input type="text" placeholder="Name.." />
                          <input type={"number"} placeholder="Enter your phone Number" />
                          <input type={"text"} placeholder="Email ID/Mobile No" />
                          <input type={type} placeholder="Password" />
                          <button
                            className="Hideshowbtn"
                            onClick={togglePassword}
                          >
                            {type === "password" ? <FaEye /> : <FaEyeSlash />}
                          </button>
                          <div className="forget-password">
                            <h6 className="login-otp">Login using OTP</h6>
                          </div>

                          <div className="login-button">
                            <button>Sign Up</button>
                          </div>
                          <div className="Signup-link" onClick={handleSignup}>
                            <p>New to ShopNow?</p>
                            <a className="Registration-link">Login Here </a>
                          </div>
                          <hr className="signup-hr-line" />
                          <div className="signup-google-links">
                            <h6>
                              Or Continue With{" "}
                              <img
                                src={Googleicon}
                                style={{ width: "40px" }}
                                alt=""
                              />{" "}
                              <img src={facebookicon} style={{ width: "20px" }} />{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>

                  )}
                </Modal.Header>
              </Modal>
            </div>

            <IoCartOutline className="cart-logo" onClick={opencartpage} style={{ fontSize: "25px" }}
            />{cartproducts.length}
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;

