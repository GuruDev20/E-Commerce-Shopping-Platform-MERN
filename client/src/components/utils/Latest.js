import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import '../../styles/Latest.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { new_arrivals, latest_deals, coming_soon } from '../data/Newarrivals';

function Latest() {
  const navigate = useNavigate();
  const[suc,setSuc]=useState();
  axios.defaults.withCredentials=true;
  useEffect(() => {
  axios.get('http://localhost:4000/users/', { withCredentials: true })
    .then(res => {
      if (res.data === 'Users Dashboard Success') {
        setSuc("Success ok");
      } else {
        navigate('/notfound');
      }
    })
    .catch(err => console.log(err));
  }, [navigate]);
  
  const renderItems = (items, additionalClassName = '') => {
    return items.map((item) => (
      <div key={item.id} className={`card ${additionalClassName}`}>
        <img src={item.image} alt={item.name} />
        <h3 className='item-brand'>{item.brand}</h3>
        <p className='item-name'>{item.name}</p>
      </div>
    ));
  };

  return (
    <div val={{suc}}>
      <Navbar />
      <div className='new-arrivals'>
        <div className='new-title'>New Arrivals</div>
        <div className='new-arrivals-container'>{renderItems(new_arrivals)}</div>
      </div>
      <div className='latest-deals'>
        <div className='new-title'>Latest Deals</div>
        <div className='latest-deals-container'>{renderItems(latest_deals)}</div>
      </div>
      <div className='coming-soon'>
        <div className='new-title'>Coming Soon</div>
        <div className='coming-soon-container'>
          {renderItems(coming_soon, 'bounce')}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Latest;
