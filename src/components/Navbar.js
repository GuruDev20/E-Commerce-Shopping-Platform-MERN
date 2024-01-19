import React from 'react'
import '../styles/Welcome.css'
import { GiShoppingBag } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link} from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";
function Navbar() {
  return (
    <div className='header'>
          <div className='icon'>
            <GiShoppingBag size={50} />
            <span>Shopify</span>
          </div>
          <div className='navbar'>
            <ul>
              <li>
                <Link to="/" className='nav-link' reloadDocument>Home</Link>
              </li>
              <li>
                  <div className='dropdown'>
                    <Link to="/cloths/men-top-wear" className='nav-link'>Top wear</Link>
                    <Link to="/cloths/men-bottom-wear" className='nav-link'>Bottom wear</Link>
                    <Link to="/cloths/men-footwear" className='nav-link'>Footwear</Link>
                    <Link to="/cloths/men-gadgets" className='nav-link'>Gadgets</Link>
                    <Link to="/cloths/men-accessories" className='nav-link'>Accessories</Link>
                  </div>
                  <div className='nav-link-items'>Mens</div>
              </li>
              <li>
                <div className='dropdown'>
                  <Link to='/cloths/women-fusion-wear' className='nav-link'>Fusion wear</Link>
                  <Link to='/cloths/women-western-wear' className='nav-link'>Western wear</Link>
                  <Link to='/cloths/women-footwear' className='nav-link'>Footwear</Link>
                  <Link to='/cloths/women-gadgets' className='nav-link'>Gadgets</Link>
                  <Link to='/cloths/women-accessories' className='nav-link'>Accessories</Link>
                </div>
                <div className='nav-link-items'>Womens</div>
              </li>
              <li>
                <div className='dropdown'>
                  <Link to='/cloths/kids-boys' className='nav-link'>Boys</Link>
                  <Link to='/cloths/kids-girls' className='nav-link'>Girls</Link>
                  <Link to='/cloths/kids-footwear' className='nav-link'>Foot wear</Link>
                  <Link to='/cloths/kids-toys' className='nav-link'>Toys</Link>
                  <Link to='/cloths/kids-infant' className='nav-link'>Baby</Link>
                </div>
                <div className='nav-link-items'>Kids</div>
              </li>
              <li>
                  <Link to='/cloths/newarrivals' className='nav-link'>New Arrivals</Link>
              </li>
            </ul>
          </div>
          {false?
          <div className='profile'>
            <IoPersonCircleSharp size={40}/>
          </div>:
          (<div className='loginbutton'>
            <Link to='/loginregister'  className='nav-link'>
              <button className='login'>Login</button>
            </Link>
          </div>
          )}
          <div className='whislist'>
            <CiHeart size={40} color='#e56b6f'/>
          </div>
          <div className='cart'>
            <FaShoppingCart size={30}/>
          </div>
        </div>
  )
}

export default Navbar