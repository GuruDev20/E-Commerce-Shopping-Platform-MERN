import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import DropdownContent from './DropdownContent';
import { IoClose } from "react-icons/io5";
import FilterContent from './Filter.Content';
import '../styles/Dresses.css'
import '../styles/FilterContent.css'
const categoriesData = {
  'Mens-Top-wear': ['Casual Shirts', 'Formal Shirts', 'Blazers', 'T-Shirts', 'Jackets'],
  'Mens-Bottom-wear': ['Jeans', 'Casual trousers', 'Formal Trousers', 'Shorts', 'Track Pants'],
  'Mens-Footwear': ['Sport Shoes', 'Casual Shoes', 'Formal Shoes', 'Sneakers', 'Sandals', 'Socks'],
  'Mens-Gadgets': ['Smart Wearables', 'Fitness gadgets'],
  'Mens-Accessories': ['Wallets', 'Belts', 'Perfumes', 'Rings & Wristwear'],
  'Womens-Top-wear':['Kurtas','Sarees','Tops','T-Shirts','Sweatshirts','Jackets'],
  'Womens-Bottom-wear':['Leggings','Jeans','Palazzos','Salwars'],
  'Womens-Footwear':['Flats','Casual Shoes','Heels','Sport Shoes'],
  'Womens-Gadgets':['Smart Wearables', 'Fitness gadgets'],
  'Womens-Accessories':['Handbags','Perfumes'],
  'Kids-Boys':['T-Shirts','Shirts','Shorts','Jeans','Trousers','Sweatshirts'],
  'Kids-Girls':['T-Shirts','Tops','Shorts','Jeans','Trousers','Sweatshirts'],
  'Kids-Footwear':['Sport Shoes', 'Casual Shoes', 'Formal Shoes', 'Sneakers', 'Heels'],
};

const sizesData = {
  'Mens-Top-wear': ['S', 'M', 'L', 'XL', 'XXL'],
  'Mens-Bottom-wear': ['28', '30', '32', '34', '36', '38', '40'],
  'Mens-Footwear': ['6', '7', '8', '9', '10'],
  'Mens-Gadgets': ['Onesize', '20mm', '22mm', '24mm'],
  'Mens-Accessories': ['Onesize', '36', '38', '40', '42', '44'],
  'Womens-Top-wear': ['S', 'M', 'L', 'XL', 'XXL'],
  'Womens-Bottom-wear': ['28', '30', '32', '34', '36', '38', '40'],
  'Womens-Footwear': ['6', '7', '8', '9', '10'],
  'Womens-Gadgets': ['Onesize', '20mm', '22mm', '24mm'],
  'Womens-Accessories': ['Onesize'],
  'Kids-Boys': ['S', 'M', 'L','22','24','26','28','30'],
  'Kids-Girls': ['S', 'M', 'L','22','24','26','28','30'],
  'Kids-Footwear': ['4','5','6', '7', '8', '9'],
};

const colorsData = {
  'Mens-Top-wear': ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Maroon', 'Teal','Pink', 'Grey', 'Navy'],
  'Mens-Bottom-wear': ['Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy'],
  'Mens-Footwear': ['Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy','Brown'],
  'Mens-Gadgets': ['Blue', 'White', 'Black', 'Gold', 'Cream', 'Teal', 'Grey', 'Navy', 'Burgundy', 'Brown'],
  'Mens-Accessories': ['Red','Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy','Brown'],
  'Womens-Top-wear': ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Maroon', 'Teal','Pink', 'Grey', 'Navy','Purple','LightBlue'],
  'Womens-Bottom-wear': ['Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy','Maroon'],
  'Womens-Footwear': ['Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy','Brown'],
  'Womens-Gadgets': ['Blue', 'White', 'Black', 'Gold', 'Cream', 'Teal', 'Grey', 'Navy', 'Burgundy', 'Brown'],
  'Womens-Accessories': ['Red','Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy','Brown','Purple'],
  'Kids-Boys': ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Maroon', 'Teal','Pink', 'Grey', 'Navy','Purple',],
  'Kids-Girls': ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Maroon', 'Teal','Pink', 'Grey', 'Navy','Purple',],
  'Kids-Footwear': ['Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy','Brown'],
};

const patternData={
  'Mens-Top-wear':['Stripe','Checked','Floral','Solid','Printed'],
  'Mens-Bottom-wear':['Solid','Checked','Stripe','Printed'],
  'Mens-Footwear':['Solid','Textured','Woven Design'],
  'Mens-Gadgets':['Steel','Leather','Rubber'],
  'Mens-Accessories':['Solid','Textured','Striped','Woven Design','Checked','Handmade'],
  'Womens-Top-wear':['Stripe','Checked','Floral','Solid','Printed'],
  'Womens-Bottom-wear':['Solid','Checked','Stripe','Printed'],
  'Womens-Footwear':['Solid','Textured','Woven Design'],
  'Womens-Gadgets':['Steel','Leather','Rubber'],
  'Womens-Accessories':['Solid','Textured','Striped','Woven Design','Checked','Handmade'],
  'Kids-Boys':['Stripe','Checked','Floral','Solid','Printed'],
  'Kids-Girls':['Solid','Checked','Stripe','Printed'],
  'Kids-Footwear':['Solid','Textured','Woven Design'],
};

function Filter(props) {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const [showPatternDropdown, setShowPatternDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [checkedItems, setCheckedItems] = useState({
    category: [],
    size: [],
    color: [],
    pattern: [],
    price: [],
  });

  const renderPriceRange = () => (
    <div className='price-range-container'>
      <span>&#8377;{priceRange.min}</span>
      <input
        type='range'
        min={0}
        max={50000}
        value={priceRange.min}
        onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
        className='price-range'
      />
      <input
        type='range'
        min={0}
        max={50000}
        value={priceRange.max}
        onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
        className='price-range'
      />
      <span>&#8377;{priceRange.max}</span>
    </div>
  );
  const renderCategoryItem = (item) => (
    <div className='category-item'>
      {item}
      <input
        type='checkbox'
        value={item}
        className='checkbox-right'
        onChange={() => handleCheckboxChange(item, selectedCategory, setSelectedCategory, 'category')}
        checked={checkedItems.category.includes(item)}
      />
    </div>
  );

  const renderSizeItem = (item) => (
    <div className='size-item'>
      {item}
      <input
        type='checkbox'
        value={item}
        className='checkbox-right'
        onChange={() => handleCheckboxChange(item, selectedSize, setSelectedSize, 'size')}
        checked={checkedItems.size.includes(item)}
      />
    </div>
  );

  const renderColorItem = (item, index) => (
    <div key={index} className='color-item'>
      <div className='colors-present' style={{ background: item.toLowerCase() }}></div>
      {item}
      <input
        type='checkbox'
        value={item}
        className='checkbox-right'
        onChange={() => handleCheckboxChange(item, selectedColor, setSelectedColor, 'color')}
        checked={checkedItems.color.includes(item)}
      />
    </div>
  );

  const renderPatternItem = (item) => (
    <div className='pattern-item'>
      {item}
      <input
        type='checkbox'
        value={item}
        className='checkbox-right'
        onChange={() => handleCheckboxChange(item, selectedPattern, setSelectedPattern, 'pattern')}
        checked={checkedItems.pattern.includes(item)}
      />
    </div>
  );

   const handleCheckboxChange = (item, selectedList, setSelectedList, filterType) => {
    const updatedList = selectedList.includes(item)
      ? selectedList.filter((selectedItem) => selectedItem !== item)
      : [...selectedList, item];
    setSelectedList(updatedList);
    if (filterType === 'price') {
      setCheckedItems({ ...checkedItems, [filterType]: [priceRange.min, priceRange.max] });
    } else {
      const updatedCheckedItems = { ...checkedItems, [filterType]: updatedList };
      setCheckedItems(updatedCheckedItems);
    }
  };

  const deleteSelectedItem = (item, selectedList, setSelectedList, filterType) => {
    const updatedList = selectedList.filter((selectedItem) => selectedItem !== item);
    setSelectedList(updatedList);
    if (filterType === 'price') {
      setCheckedItems({ ...checkedItems, [filterType]: [priceRange.min, priceRange.max] });
    } else {
      const updatedCheckedItems = { ...checkedItems, [filterType]: updatedList };
      setCheckedItems(updatedCheckedItems);
    }

    const checkbox = document.querySelector(`input[type="checkbox"][value="${item}"]`);
    if (checkbox) {
      checkbox.checked = false;
    }
  };
  return (
    <div className='cloths-product-container'>
      <div className='cloths-filter'>
        <h2 className='shop-title'>Shop By</h2>
          <div className='selected-list'>
            {selectedCategory.map((item) => (
              <span key={item} className='selected'>{item} <IoClose  className='close' onClick={() => deleteSelectedItem(item,selectedCategory, setSelectedCategory,'category')}/></span>
            ))}
            {selectedSize.map((item) => (
              <span key={item} className='selected'>{item} <IoClose  className='close' onClick={() => deleteSelectedItem(item,selectedSize, setSelectedSize,'size')}/></span>
            ))}
            {selectedColor.map((item) => (
              <span key={item} className='selected'>{item} <IoClose  className='close' onClick={() => deleteSelectedItem(item,selectedColor, setSelectedColor,'color')}/></span>
            ))}
            {selectedPattern.map((item) => (
              <span key={item} className='selected'>{item} <IoClose  className='close' onClick={() => deleteSelectedItem(item,selectedPattern, setSelectedPattern,'pattern')}/></span>
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
                {renderPriceRange()}
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
        <div>
          <FilterContent val={checkedItems} category={props.sort}/>
        </div>
    </div>
  )
}

export default Filter