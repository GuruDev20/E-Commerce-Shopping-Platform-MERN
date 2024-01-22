import React from 'react';
import '../styles/Dresses.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Filter from './Filter';
function Dresses(props) {
  return (
    <div className='cloth-products'>
      <Navbar />
      <div className='cloths-search'>
        <input type='search' placeholder='Search products' className='cloths-field-search' />
      </div>
      <div><Filter sort={props.sort}/></div>
      <Footer />
    </div>
  );
}

export default Dresses;
