import React, { useState } from 'react';
import '../../styles/Dresses.css';
import Navbar from '../Navbar';
import Footer from './Footer';
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";
function Dresses(props) {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const [showPatternDropdown, setShowPatternDropdown] = useState(false);

  return (
    <div className='cloth-products'> 
      <Navbar/>
      <div className='cloths-search'>
        <input type='search' placeholder='Search products' className='cloths-field-search'/>
      </div>
      <div className='cloths-product-container'>
        <div className='cloths-filter'>
          <h2 className='shop-title'>Shop By</h2>
          <div className='filters'>
            <div className='category' onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>Categories{showCategoryDropdown ? <IoMdArrowDropup className='drop-icon'/> : <IoMdArrowDropdown className='drop-icon'/>}</div>
            {showCategoryDropdown && props.sort==="Mens-Top-wear"&&(
              <div className='dropdown-content'>
                <div className='category-item'>Casual Shirts</div>
                <div className='category-item'>Formal Shirts</div>
                <div className='category-item'>Blazers</div>
                <div className='category-item'>T-Shirts</div>
                <div className='category-item'>Jackets</div>
              </div>
            )}
            {showCategoryDropdown && props.sort==="Mens-Footwear"&&(
              <div className='dropdown-content'>
                <div className='category-item'>Sport Shoes</div>
                <div className='category-item'>Casual Shoes</div>
                <div className='category-item'>Formal Shoes</div>
                <div className='category-item'>Sneakers</div>
                <div className='category-item'>Sandals</div>
                <div className='category-item'>Socks</div>
              </div>
            )}
            {showCategoryDropdown && props.sort==="Mens-Bottom-wear"&&(
              <div className='dropdown-content'>
                <div className='category-item'>Jeans</div>
                <div className='category-item'>Casual trousers</div>
                <div className='category-item'>Formal Trousers</div>
                <div className='category-item'>Shorts</div>
                <div className='category-item'>Track Pants</div>
              </div>
            )}
            {showCategoryDropdown && props.sort==="Mens-Gadgets"&&(
              <div className='dropdown-content'>
                <div className='category-item'>Smart Wearables</div>
                <div className='category-item'>Fitness gadgets</div>
                <div className='category-item'>Headphones</div>
              </div>
            )}
            {showCategoryDropdown && props.sort==="Mens-Accessories"&&(
              <div className='dropdown-content'>
                <div className='category-item'>Wallets</div>
                <div className='category-item'>Belts</div>
                <div className='category-item'>Trimmers</div>
                <div className='category-item'>Perfumes</div>
                <div className='category-item'>Rings & Wristwear</div>
              </div>
            )}
            <div className='price' onClick={() => setShowPriceDropdown(!showPriceDropdown)}>Price{showPriceDropdown ? <IoMdArrowDropup className='drop-icon'/> : <IoMdArrowDropdown className='drop-icon'/>}</div>
            {showPriceDropdown && (
              <div className='dropdown-content'>
                <input type='range' min={0} max={50000} name='price' className='price-range'/>
              </div>
            )}
            <div className='size' onClick={() => setShowSizeDropdown(!showSizeDropdown)}>Size{showSizeDropdown ? <IoMdArrowDropup className='drop-icon'/> : <IoMdArrowDropdown className='drop-icon'/>}</div>
            {showSizeDropdown && props.sort==="Mens-Top-wear" &&(
              <div className='dropdown-content'>
                <div className='size-item'>S</div>
                <div className='size-item'>M</div>
                <div className='size-item'>L</div>
                <div className='size-item'>XL</div>
                <div className='size-item'>XXL</div>
              </div>
            )}
            {showSizeDropdown && props.sort==="Mens-Bottom-wear" &&(
              <div className='dropdown-content'>
                <div className='size-item'>28</div>
                <div className='size-item'>30</div>
                <div className='size-item'>32</div>
                <div className='size-item'>34</div>
                <div className='size-item'>36</div>
                <div className='size-item'>38</div>
                <div className='size-item'>40</div>
              </div>
            )}
            {showSizeDropdown && props.sort==="Mens-Footwear" &&(
              <div className='dropdown-content'>
                <div className='size-item'>6</div>
                <div className='size-item'>7</div>
                <div className='size-item'>8</div>
                <div className='size-item'>9</div>
                <div className='size-item'>10</div>
              </div>
            )}
            {showSizeDropdown && props.sort==="Mens-Gadgets" &&(
              <div className='dropdown-content'>
                <div className='size-item'>Onesize</div>
                <div className='size-item'>20mm</div>
                <div className='size-item'>22mm</div>
                <div className='size-item'>24mm</div>
              </div>
            )}
            {showSizeDropdown && props.sort==="Mens-Accessories" &&(
              <div className='dropdown-content'>
                <div className='size-item'>Onesize</div>
                <div className='size-item'>36</div>
                <div className='size-item'>38</div>
                <div className='size-item'>40</div>
                <div className='size-item'>42</div>
                <div className='size-item'>44</div>
              </div>
            )}
            <div className='color' onClick={() => setShowColorDropdown(!showColorDropdown)}>Color{showColorDropdown ? <IoMdArrowDropup className='drop-icon'/> : <IoMdArrowDropdown className='drop-icon'/>}</div>
            {showColorDropdown && (props.sort==="Mens-Top-wear" || props.sort==="Mens-Footwear") &&(
              <div className='dropdown-content'>
                <div className='color-item'>Red</div>
                <div className='color-item'>Blue</div>
                <div className='color-item'>Yellow</div>
                <div className='color-item'>Green</div>
                <div className='color-item'>White</div>
                <div className='color-item'>Black</div>
                <div className='color-item'>Maroon</div>
                <div className='color-item'>Teal</div>
                <div className='color-item'>Grey</div>
                <div className='color-item'>Navy</div>
              </div>
            )}
            {showColorDropdown && (props.sort==="Mens-Bottom-wear" || props.sort==="Mens-Accessories")&&(
              <div className='dropdown-content'>
                <div className='color-item'>Blue</div>
                <div className='color-item'>White</div>
                <div className='color-item'>Black</div>
                <div className='color-item'>Khaki</div>
                <div className='color-item'>Cream</div>
                <div className='color-item'>Teal</div>
                <div className='color-item'>Grey</div>
                <div className='color-item'>Navy</div>
              </div>
            )}
            {showColorDropdown && props.sort==="Mens-Gadgets" &&(
              <div className='dropdown-content'>
                <div className='color-item'>Blue</div>
                <div className='color-item'>White</div>
                <div className='color-item'>Black</div>
                <div className='color-item'>Gold</div>
                <div className='color-item'>Cream</div>
                <div className='color-item'>Teal</div>
                <div className='color-item'>Grey</div>
                <div className='color-item'>Navy</div>
                <div className='color-item'>Burgundy</div>
                <div className='color-item'>Brown</div>
              </div>
            )}
            <div className='pattern' onClick={() => setShowPatternDropdown(!showPatternDropdown)}>Pattern{showPatternDropdown ? <IoMdArrowDropup className='drop-icon'/> : <IoMdArrowDropdown className='drop-icon'/>}</div>
            {showPatternDropdown && (
              <div className='dropdown-content'>
                <div className='pattern-item'>Stripes</div>
                <div className='pattern-item'>Floral</div>
              </div>
            )}
          </div>
        </div>
        <div className='cloths-filter-content'>{props.sort}</div>
      </div>
      <Footer/>
    </div>
  );
}

export default Dresses;
