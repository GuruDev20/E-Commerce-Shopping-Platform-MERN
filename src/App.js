import React from "react";
import Welcome from "../src/components/Welcome";
import { Routes, Route } from "react-router-dom";
import Dresses from "../src/components/utils/Dresses";
import Foods from "../src/components/utils/Foods";
import Home from "../src/components/utils/Home";
import Health from "../src/components/utils/Health";
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
      <Route path="/cloths" element={<Dresses />} />
      <Route path="/foods" element={<Foods />} />
      <Route path="/home" element={<Home />} />
      <Route path="/health" element={<Health />} />
    </Routes>
  );
}
export default App;

