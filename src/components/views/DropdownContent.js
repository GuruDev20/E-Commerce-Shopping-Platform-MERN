import React from 'react';
const DropdownContent = ({ items, renderItem }) => (
  <div className='dropdown-content'>
    {items.map((item, index) => (
      <div key={index} className='category-item'>
        {renderItem(item)}
      </div>
    ))}
  </div>
);

export default DropdownContent;
