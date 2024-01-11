import React from 'react'
import '../../styles/Main.css'
import { Link } from 'react-scroll';
import shopping from '../../assets/shop.svg';
function view1() {
  return (
    <div className='content'>
        <div className='left'>
            <h1 className='welcome'>Welcome to Shopify</h1>
            <h2 className='explore'>Explore More...</h2>
            <Link to='footer-container' smooth={true} duration={700}><button className='explore-btn'>Explore</button></Link>
        </div>
        <div className='right'>
          <img src={shopping} alt='shopping' className='shopping'/>
        </div>
    </div>
  )
}

export default view1