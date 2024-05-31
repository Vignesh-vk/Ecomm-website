import React from 'react'
import Offerbanner1 from "../Assets/offerbanner1.jpg";
import '../OfferBanner/Offerbanner.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Offerbanner = () => {
const navigate = useNavigate()
  const openofferbanner = (item) =>{
    navigate(`${item.slug}/${item.id}`)
  }
  return (
    
    <Link to="/shop/women" className='Christmas-offer-banner'
    >
<div className="exclusive-offer-banner">
  
    <img src={Offerbanner1} onClick={openofferbanner}   alt="" />
  
</div>

    </Link>
  )
}
