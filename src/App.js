import React from "react";
import Welcome from "../src/components/Welcome";
import { Routes, Route } from "react-router-dom";
import Dresses from "../src/components/utils/Dresses";
import Foods from "../src/components/utils/Foods";
import Home from "../src/components/utils/Home";
import Health from "../src/components/utils/Health";
import Furntiures from "./components/utils/Furntiure";
import Gifts from "../src/components/utils/Gifts";
import LoginRegister from "./components/LoginRegister";
function App() {
  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var rev = document.querySelectorAll(".rev");
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 100;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
        rev[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
        rev[i].classList.remove("active");
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
      <Route path="/furntiures" element={<Furntiures />} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/loginregister" element={<LoginRegister />} />
    </Routes>
  );
}
export default App;

