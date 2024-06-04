import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import Homepage from "./componenets/Homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productdetailpage from "./componenets/Productdetailpage/Productdetailpage";
import Footer from "./componenets/Footer/Footer";
import Productlistingpage from "./componenets/Listingpage/Productlistingpage";
// import all_product from "./componenets/Assets/all_product";
import Cart from "./componenets/cart/cart";
import { Offerbanner } from "./componenets/OfferBanner/Offerbanner";
import Livescrollingoffer from "./componenets/Navbar/Livescrollingoffer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Livescrollingoffer /> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/:slug/:id" element={<Productdetailpage />}></Route>
          <Route
            path="/product/:slug/:id"
            element={<Productdetailpage />}
          ></Route>
          <Route
            path="/shop/:slug/:subcategory?"
            element={<Productlistingpage />}
          >
        
          </Route>
          <Route path="/:slug/:id" element={<Offerbanner />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
