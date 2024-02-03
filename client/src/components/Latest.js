import React from 'react';
import '../styles/Latest.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { new_arrivals, latest_deals, coming_soon } from '../components/data/Newarrivals';

function Latest() {
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
    <div>
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
