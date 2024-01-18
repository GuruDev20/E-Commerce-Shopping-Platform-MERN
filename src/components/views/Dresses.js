import React from 'react'
import '../../styles/Dresses.css'
import Navbar from '../Navbar'
import Footer from './Footer'
function Dresses(props) {
  return (
    <div className='cloth-products'> 
        <Navbar/>
        <div className='cloths-search'>
            <input type='search' placeholder='Search products' className='cloths-field-search'/>
        </div>
        <div className='cloths-product-container'>
          <div className='cloths-filter'>
            Shop By
            <div className='filter-by'></div>
          </div>
          <div className='cloths-filter-content'>
            {props.sort}
            <div className='sort-by'></div>
            <div className='sort-results'></div>
            <div className='more-cloths'></div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Dresses