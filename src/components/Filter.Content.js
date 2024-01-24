import React,{useState} from 'react'
import '../styles/FilterContent.css'
import { FaStar } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { top_wear_collection } from './data/Men.Topwear';
import { bottom_wear_collection } from './data/Men.Bottomwear';
import {mens_footwear} from './data/Mens.Footwear';
import {mens_gadgets} from './data/Mens.Gadgets';
import {men_accessories} from './data/Mens.Accesories';
function FilterContent({ val,category }) {
  const itemsPerPage = 12;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const getCollection = () => {
    switch (category) {
      case 'Mens-Top-wear':
        return top_wear_collection;
      case 'Mens-Bottom-wear':
        return bottom_wear_collection;
      case 'Mens-Footwear':
        return mens_footwear;
      case 'Mens-Gadgets':
        return mens_gadgets;
      case 'Mens-Accessories':
        return men_accessories;
      default:
        return [];
    }
  };

  const filteredItems = getCollection().filter((item) => {
    return (
      (val.category.length === 0 || val.category.includes(item.category)) &&
      (val.size.length === 0 || val.size.some((size) => item.size.includes(size))) &&
      (val.color.length === 0 || val.color.some((color) => item.color.includes(color))) &&
      (val.pattern.length === 0 || val.pattern.includes(item.pattern)) &&
      (val.price.length === 0 || (item.price >= val.price[0] && item.price <= val.price[1]))
    );
  });


  const visibleItemsData = filteredItems.slice(0, visibleItems);

  const handleExploreMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  return (
    <>
      <section className='card-container'>
        {visibleItemsData.map((item) => (
          <Link to='/cloths/men-top-wear/details' className='link-to-more' key={item.id}>
            <section className='card-list'>
              <img src={item.image} alt='' className='card-img-result' />
              <div className='card-details'>
                <h3 className='card-title'>{item.brand}</h3>
                <h5 className='card-title'>{item.name}</h5>
                <section className='card-reviews'>
                  <FaStar className='ratings-start' />
                  <FaStar className='ratings-start' />
                  <FaStar className='ratings-start' />
                  <FaStar className='ratings-start' />
                  <span className='total-reviews'>4</span>
                </section>
                <section className='card-price'>
                  <div className='price-item'>
                    <del className='deleted-price'>&#8377;{item.previous_price}</del>&#8377;{item.price}
                  </div>
                  <div className='bag'>
                    <BsBagHeartFill className='bag-icon' size={20}/>
                  </div>
                </section>
              </div>
            </section>
          </Link>
        ))}
      </section>
      {visibleItems < filteredItems.length && (
        <div className='explore-more-container'>
        <button className='explore-more-results' onClick={handleExploreMore}>
          Explore more
        </button>
        </div>
      )}
    </>
  );
}
export default FilterContent;