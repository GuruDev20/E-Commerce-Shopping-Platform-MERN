import React from "react";
import Welcome from "../src/components/Welcome";
import { Routes, Route } from "react-router-dom";
import Dresses from "../src/components/views/Dresses";
import Foods from "../src/components/views/Foods";
import Home from "../src/components/views/Home";
import Health from "../src/components/views/Health";
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
      <Route path="/cloths/men-items" element={<Dresses sort="Mens"/>} />
      <Route path="/cloths/women-items" element={<Dresses sort="Womens"/>} />
      <Route path="/cloths/kids-items" element={<Dresses sort="Kids"/>} />
      <Route path="/cloths/men-accessories-items" element={<Dresses sort="Men-Accessories"/>} />
      <Route path="/cloths/women-accessories-items" element={<Dresses sort="Women-Accessories"/>} />
      <Route path="/cloths/beauty" element={<Dresses sort="Beauty"/>} />
      <Route path="/foods/breakfast" element={<Foods sort="BreakFast"/>} />
      <Route path="/foods/lunch" element={<Foods sort="Lunch"/>} />
      <Route path="/foods/Dinner" element={<Foods sort="Dinner"/>} />
      <Route path="/foods/softdrinks" element={<Foods sort="Soft Drinks"/>} />
      <Route path="/foods/hotdrinks" element={<Foods sort="Hot Drinks"/>} />
      <Route path="/home/plants" element={<Home sort="Plants"/>} />
      <Route path="/home/lights" element={<Home sort="Lights"/>} />
      <Route path="/home/decoration" element={<Home sort="Decorations"/>} />
      <Route path="/health/skincare" element={<Health sort="Skin Care"/>} />
      <Route path="/health/moisture" element={<Health sort="Moisturizer"/>} />
      <Route path="/health/dailyproducts" element={<Health sort="Daily Products"/>} />
      <Route path="/loginregister" element={<LoginRegister/>} />
    </Routes>
  );
}
export default App;

