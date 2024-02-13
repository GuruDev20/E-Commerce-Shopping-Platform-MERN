import React from 'react'
import Welcome from "../src/components/utils/Welcome";
import { Routes, Route } from "react-router-dom";
import Dresses from "../src/components/utils/Dresses";
import LoginRegister from "./components/utils/Login.Register";
import ProductDetails from "../src/components/utils/ProductDetails";
import Cart from "./components/utils/Cart";
import WhistList from "../src/components/utils/WhistList";
import Latest from "./components/utils/Latest";
import Profile from './components/utils/Profile'
import Admin from "./components/Admin/Admin";
import Dealers from "./components/Dealers/Dealers";
import NotFound from './components/utils/404NotFound';
import Orders from './components/utils/Orders';
function App() {
  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var rev = document.querySelectorAll(".rev");
    var revv = document.querySelectorAll(".revv");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 100;
  
      if (reveals[i] && revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else if (reveals[i]) {
        reveals[i].classList.remove("active");
      }
  
      if (rev[i] && revv[i] && revealtop < windowheight - revealpoint) {
        rev[i].classList.add("active");
        revv[i].classList.add("active");
      } else if (rev[i] && revv[i]) {
        rev[i].classList.remove("active");
        revv[i].classList.remove("active");
      }
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/cloths/Men-top-wear" element={<Dresses sort="Mens-Top-Wear"/>} />
      <Route path="/cloths/Men-bottom-wear" element={<Dresses sort="Mens-Bottom-Wear"/>} />
      <Route path="/cloths/Men-footwear" element={<Dresses sort="Mens-Footwear"/>} />
      <Route path="/cloths/Men-gadgets" element={<Dresses sort="Mens-Gadgets"/>} />
      <Route path="/cloths/Men-accessories" element={<Dresses sort="Mens-Accessories"/>} />
      <Route path="/cloths/Women-top-wear" element={<Dresses sort="Womens-Top-wear"/>} />
      <Route path="/cloths/Women-bottom-wear" element={<Dresses sort="Womens-Bottom-wear"/>} />
      <Route path="/cloths/Women-footwear" element={<Dresses sort="Womens-Footwear"/>} />
      <Route path="/cloths/Women-gadgets" element={<Dresses sort="Womens-Gadgets"/>} />
      <Route path="/cloths/Women-accessories" element={<Dresses sort="Womens-Accessories"/>} />
      <Route path="/cloths/Kids-boys" element={<Dresses sort="Kids-Boys"/>} />
      <Route path="/cloths/Kids-girls" element={<Dresses sort="Kids-Girls"/>} />
      <Route path="/cloths/Kids-footwear" element={<Dresses sort="Kids-Footwear"/>} />
      <Route path="/Newarrivals" element={<Latest />} />
      <Route path="/loginregister" element={<LoginRegister/>} />
      <Route path="/cloths/Men-top-wear/details/:category/:id" element={<ProductDetails/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path='/whislist' element={<WhistList/>} />
      <Route path='/myprofile' element={<Profile/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/notfound" element={<NotFound/>} />
      <Route path="/orders" element={<Orders/>} />
    </Routes>
  );
}
export default App;

