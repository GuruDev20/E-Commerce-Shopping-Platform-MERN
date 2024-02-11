import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import DropdownContent from './DropdownContent';
import { IoClose } from "react-icons/io5";
import FilterContent from './Filter.Content';
import '../../styles/Dresses.css'
import '../../styles/FilterContent.css'
const categoriesData = {
  'Mens-Top-Wear': ['Casual Shirts', 'Formal Shirts', 'Blazers', 'T-Shirts', 'Jackets'],
  'Mens-Bottom-Wear': ['Jeans', 'Casual trousers', 'Formal Trousers', 'Shorts', 'Track Pants'],
  'Mens-Footwear': ['Sport Shoes', 'Casual Shoes', 'Formal Shoes', 'Sneakers', 'Sandals', 'Socks'],
  'Mens-Gadgets': ['Smart Wearables', 'Fitness gadgets'],
  'Mens-Accessories': ['Wallets', 'Belts', 'Perfumes'],
  'Womens-Top-wear':['Kurtas','Sarees','Tops','T-Shirts','Sweatshirts','Jackets'],
  'Womens-Bottom-wear':['Leggings','Jeans','Palazzos','Salwars'],
  'Womens-Footwear':['Flats','Casual Shoes','Heels','Sport Shoes'],
  'Womens-Gadgets':['Smart Wearables', 'Fitness gadgets'],
  'Womens-Accessories':['Handbags','Perfumes'],
  'Kids-Boys':['T-Shirts','Shirts','Shorts','Jeans','Sweatshirts'],
  'Kids-Girls':['T-Shirts','Tops','Jeans','Sweatshirts'],
  'Kids-Footwear':['Sport Shoes', 'Casual Shoes'],
};
const pricesData={
  'Mens-Top-Wear': ['0-500','500-1000','1000-2000','2000-4000'],
  'Mens-Bottom-Wear': ['0-500','500-1000','1000-2000','2000-4000'],
  'Mens-Footwear': ['0-500','500-1000','1000-2000','2000-4000'],
  'Mens-Gadgets': ['0-500','500-1000','1000-2000','2000-4000'],
  'Mens-Accessories': ['0-500','500-1000','1000-2000','2000-4000'],
  'Womens-Top-wear':['0-500','500-1000','1000-2000','2000-4000'],
  'Womens-Bottom-wear':['0-500','500-1000','1000-2000','2000-4000'],
  'Womens-Footwear':['0-500','500-1000','1000-2000','2000-4000'],
  'Womens-Gadgets':['0-500','500-1000','1000-2000','2000-4000'],
  'Womens-Accessories':['0-500','500-1000','1000-2000','2000-4000'],
  'Kids-Boys':['0-500','500-1000','1000-2000','2000-4000'],
  'Kids-Girls':['0-500','500-1000','1000-2000','2000-4000'],
  'Kids-Footwear':['0-500','500-1000','1000-2000','2000-4000'],
};
const sizesData = {
  'Mens-Top-Wear': ['S', 'M', 'L', 'XL', 'XXL'],
  'Mens-Bottom-Wear': ['28', '30', '32', '34', '36', '38', '40'],
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
  'Mens-Top-Wear': ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Maroon', 'Teal','Pink', 'Grey', 'Navy'],
  'Mens-Bottom-Wear': ['Blue', 'White', 'Black', 'Khaki', 'Cream', 'Teal', 'Grey', 'Navy'],
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
  'Mens-Top-Wear':['Stripe','Checked','Floral','Solid','Printed'],
  'Mens-Bottom-Wear':['Solid','Checked','Stripe','Printed'],
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
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [checkedItems, setCheckedItems] = useState({
    category: [],
    size: [],
    color: [],
    pattern: [],
    price: [],
  });

  const renderPriceItem = (item) => (
    <div className='price-item'>
      {item}
      <input
        type='checkbox'
        value={item}
        className='checkbox-right'
        onChange={() => handleCheckboxChange(item, selectedPrice, setSelectedPrice, 'price')}
        checked={checkedItems.price.includes(item)}
      />
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
    const updatedCheckedItems = { ...checkedItems, [filterType]: updatedList };
    setCheckedItems(updatedCheckedItems);
  };

  const deleteSelectedItem = (item, selectedList, setSelectedList, filterType) => {
    const updatedList = selectedList.filter((selectedItem) => selectedItem !== item);
    setSelectedList(updatedList);
      const updatedCheckedItems = { ...checkedItems, [filterType]: updatedList };
      setCheckedItems(updatedCheckedItems);

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
            {selectedPrice.map((item) => (
              <span key={item} className='selected'>{item} <IoClose  className='close' onClick={() => deleteSelectedItem(item, selectedPrice, setSelectedPrice, 'price')}/></span>
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
            <div className='p-price' onClick={() => setShowPriceDropdown(!showPriceDropdown)}>
              Prices{showPriceDropdown ? <IoMdArrowDropup className='drop-icon' /> : <IoMdArrowDropdown className='drop-icon' />}
            </div>
            {showPriceDropdown && <DropdownContent items={pricesData[props.sort]} renderItem={renderPriceItem} />}
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