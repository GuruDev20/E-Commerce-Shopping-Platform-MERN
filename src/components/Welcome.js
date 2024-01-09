import React from 'react';
import '../styles/Welcome.css'
import { GiShoppingBag } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Main from './views/Main'
import Men from './views/Men'
import Women from './views/Women';
import Others from './views/Other'
import Footer from './views/Footer'
function Welcome() {
  return (
    <div>
        <div className='header'>
          <div className='icon'>
            <GiShoppingBag size={50} />
            <span>Shopify</span>
          </div>
          <div className='navbar'>
            <ul>
              <li>
                <Link to="/" className='nav-link' reloadDocument>Shop</Link>
              </li>
              <li>
                <Link to="/cloths" className='nav-link'>Fashion & Clothing</Link>
              </li>
              <li>
                <Link to="/foods" className='nav-link'>Foods & Drinks</Link>
              </li>
              <li>
                <Link to="/home" className='nav-link'>Home & Garden</Link>
              </li>
              <li>
                <Link to="/health" className='nav-link'>Health & Beauty</Link>
              </li>
              <li>
                <Link to="/furntiures" className='nav-link'>Furnitures</Link>
              </li>
              <li>
                <Link to="/gifts" className='nav-link'>Gifts & Toys</Link>
              </li>
            </ul>
          </div>
          <div className='loginbutton'>
            <Link to='/loginregister'  className='nav-link'><button className='login'>Login</button></Link>
          </div>
          <div className='whislist'>
            <CiHeart size={40} color='#e56b6f'/>
          </div>
          <div className='cart'>
            <FaShoppingCart size={30}/>
          </div>
        </div>
        <div className='view1'>
          <Main/>
        </div>
        <div className='view2'>
          <Men/>
        </div>
        <div className='view3'>
          <Women/>
        </div>
        <div className='view4'>
          <Others/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
    </div>
  )
}

export default Welcome;