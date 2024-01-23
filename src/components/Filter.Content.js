import React from 'react'
import '../styles/FilterContent.css'
import Image from '../assets/men1.jpg'
import { FaStar } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";
const top_wear_collection=[
  {
    id:1,
    category:'Casual Shirts',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Red','Black'],
    pattern:'Stripe',
  },
  {
    id:2,
    category:'Casual Shirts',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Red','Black'],
    pattern:'Stripe',
  },
  {
    id:3,
    category:'Formal Shirts',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Red','Black'],
    pattern:'Stripe',
  },
  {
    id:4,
    category:'Formal Shirts',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Red','Black'],
    pattern:'Stripe',
  },
  {
    id:5,
    category:'Formal Shirts',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Red','Black'],
    pattern:'Stripe',
  },
  {
    id:6,
    category:'Casual Shirts',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Red','Black'],
    pattern:'Stripe',
  },
  {
    id:7,
    category:'Casual Shirts',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Red','Black'],
    pattern:'Stripe',
  },
  {
    id:8,
    category:'Casual Shirts',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Red','Black'],
    pattern:'Stripe',
  },
];
function FilterContent({ val }) {
  const filteredItems = top_wear_collection.filter((item) => {
    return (
      (val.category.length === 0 || val.category.includes(item.category)) &&
      (val.size.length === 0 || val.size.some((size) => item.size.includes(size))) &&
      (val.color.length === 0 || val.color.some((color) => item.color.includes(color))) &&
      (val.pattern.length === 0 || val.pattern.includes(item.pattern))
    );
  });

  return (
    <>
      <section className='card-container'>
        {filteredItems.map((item) => (
          <section key={item.id} className='card-list'>
            <img src={Image} alt='' className='card-img-result' />
            <div className='card-details'>
              <h3 className='card-title'>{item.category}</h3>
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
                  <BsBagHeartFill className='bag-icon' />
                </div>
              </section>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default FilterContent;