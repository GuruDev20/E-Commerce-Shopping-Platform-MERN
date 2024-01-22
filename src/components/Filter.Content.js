import React from 'react';
import '../styles/FilterContent.css'
import Image from '../assets/men1.jpg'
// const imageData = [
//   { type: 'Casual Shirts', category: 'Top wear', price: '1000', size: ['S', 'M', 'L'], pattern: 'Striped', color: 'Red' },
//   { type: 'Formal Shirts', category: 'Top wear', price: '1000', size: ['S', 'M', 'L'], pattern: 'Striped', color: 'Red' },
//   { type: 'Casual Shirts', category: 'Top wear', price: '1000', size: ['S', 'M', 'L'], pattern: 'Striped', color: 'Red' },
//   { type: 'Casual Shirts', category: 'Top wear', price: '1000', size: ['S', 'M', 'L'], pattern: 'Striped', color: 'Red' },
//   { type: 'Casual Shirts', category: 'Top wear', price: '1000', size: ['S', 'M', 'L'], pattern: 'Striped', color: 'Red' },
//   { type: 'Casual Shirts', category: 'Top wear', price: '1000', size: ['S', 'M', 'L'], pattern: 'Striped', color: 'Red' },
// ];
function FilterContent(props) {
  // const { category = [], size = [], color = [], pattern = [] } = props.val || {};
  return (
    // <div>
    //   <div>Selected Categories: {category.join(', ')}</div>
    //   <div>Selected Sizes: {size.join(', ')}</div>
    //   <div>Selected Colors: {color.join(', ')}</div>
    //   <div>Selected Patterns: {pattern.join(', ')}</div>
    // </div>
    <div className='filter-result'>
      <div className='card-img'>
        <img src={Image} alt='Filter' className='filter-img'/>
      </div>
      <div className='card-img'>
        <img src={Image} alt='Filter' className='filter-img'/>
      </div>
      <div className='card-img'>
        <img src={Image} alt='Filter' className='filter-img'/>
      </div>
      <div className='card-img'>
        <img src={Image} alt='Filter' className='filter-img'/>
      </div>
      <div className='card-img'>
        <img src={Image} alt='Filter' className='filter-img'/>
      </div>
      <div className='card-img'>
        <img src={Image} alt='Filter' className='filter-img'/>
      </div>
    </div>
  );
}

export default FilterContent;
