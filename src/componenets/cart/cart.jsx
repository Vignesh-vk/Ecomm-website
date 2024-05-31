
import "../cart/cart.css";
import all_product from "../Assets/all_product";
import { remove } from "../../Store/cartSlice";
import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  
  const all_product = useSelector(state => state.cart);
const dispatch = useDispatch();

  const removetoCart = (id) =>{
  dispatch(remove(id));
  }

  const decrement = () => {
    Setcount(count - 1);
  };

  const increment = () => {
    Setcount(count + 1);
  };

  const [count, Setcount] = useState(1)



return (
<>

<div className="main-cart-page">
      <div className="mycart-header-name">
            <h1>My Cart</h1>
          </div>
{ all_product.map((items, i) => (
         
      
        <div className="cart-inner-data">
         
          <div className="cart-details">
            <div className="cart-product-image">
              <img src={items.image} alt="" />
            </div>
            <div className="product-name">
              <h6>{items.name}</h6>
              <div className="add-quantity">
                        <div className="add-quantity-name">
                          <h6>QUANTITY</h6>
                        </div>
                        <div className="add-quantity-buttons">
                          <button onClick={decrement}>-</button>
                          <input
                            type="text"
                            value={count}
                          
                          />
                          <button onClick={increment}>+</button>
                        </div>
                      </div>
                      <div className="cartpage-price">
                        <h6>Rs {items.new_price}</h6>
                        <h6 className="cart-">{items.old_price}</h6>
                      </div>
                      <div className="save-and-delete">
                      <div className="save-for-later">
                      <FaRegHeart/> Save for Later
                      </div>
                      <div className="cart-delete">
                      <MdDeleteOutline/>
                      <button onClick={()=>(removetoCart(items.id))}></button>
                      </div>
                      </div>
            </div>
       
          </div>
          <div className="cart-product-price-details">
          <div className="cart-price-heading">
            <h4>Price Details</h4>
          </div>
          <hr />
          <div className="total-mrp">
            <h5>MRP</h5>
            <h5>2100</h5>
          </div>
        </div>
          
        </div>
       
      
           
          
     
     ))}
     </div>

</>    
   
  );
};

export default Cart;
