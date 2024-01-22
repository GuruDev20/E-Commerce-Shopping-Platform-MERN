import React from "react";
import Welcome from "../src/components/Welcome";
import { Routes, Route } from "react-router-dom";
import Dresses from "../src/components/Dresses";
import LoginRegister from "./components/Login.Register";
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
      <Route path="/shop" element={<Welcome />} />
      <Route path="/cloths/men-top-wear" element={<Dresses sort="Mens-Top-wear"/>} />
      <Route path="/cloths/men-bottom-wear" element={<Dresses sort="Mens-Bottom-wear"/>} />
      <Route path="/cloths/men-footwear" element={<Dresses sort="Mens-Footwear"/>} />
      <Route path="/cloths/men-gadgets" element={<Dresses sort="Mens-Gadgets"/>} />
      <Route path="/cloths/men-accessories" element={<Dresses sort="Mens-Accessories"/>} />
      <Route path="/cloths/women-fusion-wear" element={<Dresses sort="Womens-Fusion-wear"/>} />
      <Route path="/cloths/women-western-wear" element={<Dresses sort="Womens-Western-wear"/>} />
      <Route path="/cloths/women-footwear" element={<Dresses sort="Womens-Footwear"/>} />
      <Route path="/cloths/women-gadgets" element={<Dresses sort="Womens-Gadgets"/>} />
      <Route path="/cloths/women-accessories" element={<Dresses sort="Womens-Accessories"/>} />
      <Route path="/cloths/kids-boys" element={<Dresses sort="Kids-Boys"/>} />
      <Route path="/cloths/kids-girls" element={<Dresses sort="Kids-Girls"/>} />
      <Route path="/cloths/kids-footwear" element={<Dresses sort="Kids-Footwear"/>} />
      <Route path="/cloths/kids-toys" element={<Dresses sort="Kids-Toys"/>} />
      <Route path="/cloths/kids-infant" element={<Dresses sort="Kids-Baby"/>} />
      <Route path="/cloths/newarrivals" element={<Dresses sort="NewArrivals"/>} />
      <Route path="/loginregister" element={<LoginRegister/>} />
    </Routes>
  );
}
export default App;

