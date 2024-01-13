import React from 'react';
import '../styles/Welcome.css'
import { GiShoppingBag } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Main from './views/Main'
import Men from './views/Men';
import Women from './views/Women';
import Newarrivals from './views/Newarrivals'
import Footer from './views/Footer'
import Others from './views/Others';
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
                  <div className='dropdown'>
                    <Link to="/cloths/men-items" className='nav-link'>Mens</Link>
                    <Link to="/cloths/women-items" className='nav-link'>Womens</Link>
                    <Link to="/cloths/kids-items" className='nav-link'>Kids</Link>
                    <Link to="/cloths/men-accessories-items" className='nav-link'>Men's Accessories</Link>
                    <Link to="/cloths/women-accessories-items" className='nav-link'>Women's Accessories</Link>
                    <Link to="/cloths/beauty" className='nav-link'>Beauty Products</Link>
                  </div>
                  <div className='nav-link-items'>Fashion & Clothing</div>
              </li>
              <li>
                <div className='dropdown'>
                  <Link to='/foods/breakfast' className='nav-link'>Breakfast</Link>
                  <Link to='/foods/lunch' className='nav-link'>Lunch</Link>
                  <Link to='/foods/dinner' className='nav-link'>Dinner</Link>
                  <Link to='/foods/hotdrinks' className='nav-link'>Hot Drinks</Link>
                  <Link to='/foods/softdrinks' className='nav-link'>Soft Drinks</Link>
                </div>
                <div className='nav-link-items'>Foods & Drinks</div>
              </li>
              <li>
                <div className='dropdown'>
                  <Link to='/home/plants' className='nav-link'>Plants</Link>
                  <Link to='/home/lights' className='nav-link'>Lights</Link>
                  <Link to='/home/decoration' className='nav-link'>Decoration</Link>
                </div>
                <div className='nav-link-items'>Home & Garden</div>
              </li>
              <li>
                <div className='dropdown'>
                  <Link to='/health/skincare' className='nav-link'>Skincare</Link>
                  <Link to='/health/moisture' className='nav-link'>Moisturisers</Link>
                  <Link to='/health/dailyproductus' className='nav-link'>Daily Products</Link>
                </div>
                <div className='nav-link-items'>Health & Beauty</div>
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
        <div><Main/></div>
        <div><Men/></div>
        <div><Women/></div>
        <div><Others/></div>
        <div><Newarrivals/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Welcome;