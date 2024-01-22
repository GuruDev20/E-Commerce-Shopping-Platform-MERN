import React from 'react';
import '../styles/Dresses.css';
import Navbar from './Navbar';
import Footer from './Footer';
import FilterContent from './Filter.Content';
import Filter from './Filter';
function Dresses(props) {
  return (
    <div className='cloth-products'>
      <Navbar />
      <div className='cloths-search'>
        <input type='search' placeholder='Search products' className='cloths-field-search' />
      </div>
      <div className='cloths-product-container'>
        <div className='cloths-filter'>
          <Filter sort={props.sort}/>
        </div>
        <div className='cloths-filter-content'>
          <FilterContent val={props.sort}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dresses;
