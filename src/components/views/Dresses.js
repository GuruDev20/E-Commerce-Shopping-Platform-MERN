import React, { useState } from 'react';
import '../../styles/Dresses.css';
import Navbar from '../Navbar';
import Footer from './Footer';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import DropdownContent from './DropdownContent';
import { IoClose } from "react-icons/io5";
const categoriesData = {
  'Mens-Top-wear': ['Casual Shirts', 'Formal Shirts', 'Blazers', 'T-Shirts', 'Jackets'],
  'Mens-Bottom-wear': ['Jeans', 'Casual trousers', 'Formal Trousers', 'Shorts', 'Track Pants'],
  'Mens-Footwear': ['Sport Shoes', 'Casual Shoes', 'Formal Shoes', 'Sneakers', 'Sandals', 'Socks'],
  'Mens-Gadgets': ['Smart Wearables', 'Fitness gadgets', 'Headphones'],
  'Mens-Accessories': ['Wallets', 'Belts', 'Trimmers', 'Perfumes', 'Rings & Wristwear'],
};

const sizesData = {
  'Mens-Top-wear': ['S', 'M', 'L', 'XL', 'XXL'],
  'Mens-Bottom-wear': ['28', '30', '32', '34', '36', '38', '40'],
  'Mens-Footwear': ['6', '7', '8', '9', '10'],
  'Mens-Gadgets': ['Onesize', '20mm', '22mm', '24mm'],
  'Mens-Accessories': ['Onesize', '36', '38', '40', '42', '44'],
};

const colorsData = {
  'Mens-Top-wear': ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Maroon', 'Teal','Pink', 'Grey', 'Navy'],
  'Mens-Bottom-wear': ['Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy'],
  'Mens-Footwear': ['Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy'],
  'Mens-Gadgets': ['Blue', 'White', 'Black', 'Gold', 'Cream', 'Teal', 'Grey', 'Navy', 'Burgundy', 'Brown'],
  'Mens-Accessories': ['Red','Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy'],
};

const patternData={
  'Mens-Top-wear':['Stripe','Checked','Floral','Solid','Printed'],
  'Mens-Bottom-wear':['Solid','Checked','Stripe','Printed'],
  'Mens-Footwear':['Solid','Textured','Woven Design'],
  'Mens-Gadgets':['Steel','Leather','Rubber','Solid'],
  'Mens-Accessories':['Solid','Textured','Striped','Woven Design','Checked','Handmade'],
}
function Dresses(props) {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const [showPatternDropdown, setShowPatternDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState([]);
  const renderCategoryItem = (item) => <div className='category-item'>{item}<input type='checkbox' value={item} className='checkbox-right' onChange={() => handleCheckboxChange(item, selectedCategory, setSelectedCategory)}/></div>;
  const renderSizeItem = (item) => <div className='size-item'>{item}<input type='checkbox' value={item} className='checkbox-right'onChange={() => handleCheckboxChange(item, selectedSize, setSelectedSize)}/></div>;
  const renderColorItem = (item, index) => (<div key={index} className='color-item'><div className='colors-present' style={{ background: item.toLowerCase() }}></div>{item}<input type='checkbox' value={item} className='checkbox-right' onChange={() => handleCheckboxChange(item, selectedColor, setSelectedColor)}/></div>);
  const renderPatternItem = (item) => <div className='pattern-item'>{item}<input type='checkbox' value={item} className='checkbox-right' onChange={() => handleCheckboxChange(item, selectedPattern, setSelectedPattern)}/></div>;
  const handleCheckboxChange = (item, selectedList, setSelectedList) => {
    const updatedList = selectedList.includes(item)
      ? selectedList.filter((selectedItem) => selectedItem !== item)
      : [...selectedList, item];
    setSelectedList(updatedList);
  };
  const deleteSelectedItem = (item,selectedList, setSelectedList) => {
    const updatedList = selectedList.filter((selectedItem) => selectedItem !== item);
    setSelectedList(updatedList);
    const checkbox = document.querySelector(`input[type="checkbox"][value="${item}"]`);
    if (checkbox) {
      checkbox.checked = false;
    }
  };
  return (
    <div className='cloth-products'>
      <Navbar />
      <div className='cloths-search'>
        <input type='search' placeholder='Search products' className='cloths-field-search' />
      </div>
      <div className='cloths-product-container'>
        <div className='cloths-filter'>
          <h2 className='shop-title'>Shop By</h2>
          <div className='selected-list'>
            {selectedCategory.map((item) => (
              <span key={item} className='selected'>{item} <IoClose  className='close' onClick={() => deleteSelectedItem(item,selectedCategory, setSelectedCategory)}/></span>
            ))}
            {selectedSize.map((item) => (
              <span key={item} className='selected'>{item} <IoClose  className='close' onClick={() => deleteSelectedItem(item,selectedSize, setSelectedCategory)}/></span>
            ))}
            {selectedColor.map((item) => (
              <span key={item} className='selected'>{item} <IoClose  className='close' onClick={() => deleteSelectedItem(item,selectedColor, setSelectedCategory)}/></span>
            ))}
            {selectedPattern.map((item) => (
              <span key={item} className='selected'>{item} <IoClose  className='close' onClick={() => deleteSelectedItem(item,selectedPattern, setSelectedCategory)}/></span>
            ))}
          </div>
          <div className='filters'>
            <div className='category' onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
              Categories{showCategoryDropdown ? <IoMdArrowDropup className='drop-icon' /> : <IoMdArrowDropdown className='drop-icon' />}
            </div>
            {showCategoryDropdown && <DropdownContent items={categoriesData[props.sort]} renderItem={renderCategoryItem} />}

            <div className='price' onClick={() => setShowPriceDropdown(!showPriceDropdown)}>
              Price{showPriceDropdown ? <IoMdArrowDropup className='drop-icon' /> : <IoMdArrowDropdown className='drop-icon' />}
            </div>
            {showPriceDropdown && (
              <div className='dropdown-content'>
                <input type='range' min={0} max={50000} name='price' className='price-range' />
              </div>
            )}

            <div className='size' onClick={() => setShowSizeDropdown(!showSizeDropdown)}>
              Size{showSizeDropdown ? <IoMdArrowDropup className='drop-icon' /> : <IoMdArrowDropdown className='drop-icon' />}
            </div>
            {showSizeDropdown && <DropdownContent items={sizesData[props.sort]} renderItem={renderSizeItem} />}

            <div className='color' onClick={() => setShowColorDropdown(!showColorDropdown)}>
              Color{showColorDropdown ? <IoMdArrowDropup className='drop-icon' /> : <IoMdArrowDropdown className='drop-icon' />}
            </div>
            {showColorDropdown && <DropdownContent items={colorsData[props.sort]} renderItem={renderColorItem} />}

            <div className='pattern' onClick={() => setShowPatternDropdown(!showPatternDropdown)}>
              Pattern{showPatternDropdown ? <IoMdArrowDropup className='drop-icon' /> : <IoMdArrowDropdown className='drop-icon' />}
            </div>
            {showPatternDropdown && <DropdownContent items={patternData[props.sort]} renderItem={renderPatternItem} />}
          </div>
        </div>
        <div className='cloths-filter-content'>{props.sort}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Dresses;
