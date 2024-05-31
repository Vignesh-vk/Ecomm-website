import React from "react";
import Mainbannersection from "../Mainbanner/Mainbannersection";
import Newarrival from "../Newarrival section/newarrival";
import Filterproducts from "../Filterablegalleryproduct/Filterproducts";
import { Offerbanner } from "../OfferBanner/Offerbanner";
import Productsslider from "../ProductsSlider/Productsslider";
import Countup from "../Countup/Countup";
import Testimonals from "../Testimonals/Testimonals";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Mainbannersection />
      <Newarrival />
      <Offerbanner />
      <Filterproducts />
      <Productsslider />
      <Countup />
      <Testimonals />
      <Footer/>
    </div>
  );
};

export default Homepage;
