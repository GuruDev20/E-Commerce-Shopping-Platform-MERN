import React,{useState} from 'react'
import '../styles/FilterContent.css'
import { FaStar } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Men1 from '../assets/Mens/Men1.png';
import Men2 from '../assets/Mens/Men2.png';
import Men3 from '../assets/Mens/Men3.png';
import Men4 from '../assets/Mens/Men4.png';
import Men5 from '../assets/Mens/Men5.png';
import Men6 from '../assets/Mens/Men6.png';
import Men7 from '../assets/Mens/Men7.png';
import Men8 from '../assets/Mens/Men8.png';
import Men9 from '../assets/Mens/Men9.png';
import Men10 from '../assets/Mens/Men10.png';
import Men11 from '../assets/Mens/Men11.png';
import Men12 from '../assets/Mens/Men12.png';
import Men13 from '../assets/Mens/Men13.png';
import Men14 from '../assets/Mens/Men14.png';
import Men15 from '../assets/Mens/Men15.png';
import Men16 from '../assets/Mens/Men16.png';
import Men17 from '../assets/Mens/Men17.png';
import Men18 from '../assets/Mens/Men18.png';
import Men19 from '../assets/Mens/Men19.png';
import Men20 from '../assets/Mens/Men20.png';
import Men21 from '../assets/Mens/Men21.png';
import Men22 from '../assets/Mens/Men22.png';
import Men23 from '../assets/Mens/Men23.png';
import Men24 from '../assets/Mens/Men24.png';
import Men25 from '../assets/Mens/Men25.png';
import Men26 from '../assets/Mens/Men26.png';
import Men27 from '../assets/Mens/Men27.png';
import Men28 from '../assets/Mens/Men28.png';
import Men29 from '../assets/Mens/Men29.png';
import Men30 from '../assets/Mens/Men30.png';
import Men31 from '../assets/Mens/Men31.png';
import Men32 from '../assets/Mens/Men32.png';
import Men33 from '../assets/Mens/Men33.png';
import Men34 from '../assets/Mens/Men34.png';
import Men35 from '../assets/Mens/Men35.png';
import Men36 from '../assets/Mens/Men36.png';
import Men37 from '../assets/Mens/Men37.png';
const top_wear_collection=[
  {
    id:1,
    image:Men1,
    category:'Casual Shirts',
    brand:'WROGN',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue'],
    pattern:'Stripe',
  },
  {
    id:2,
    image:Men2,
    category:'Casual Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue','White'],
    pattern:'Floral',
  },
  {
    id:3,
    image:Men3,
    category:'Casual Shirts',
    brand:'HERE & NOW',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue'],
    pattern:'Solid',
  },
  {
    id:4,
    image:Men4,
    category:'Casual Shirts',
    brand:'HIGHLANDER',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White'],
    pattern:'Solid',
  },
  {
    id:5,
    image:Men5,
    category:'Casual Shirts',
    brand:'RoadSter',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White','Green','Teal'],
    pattern:'Floral',
  },
  {
    id:6,
    image:Men6,
    category:'Casual Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White','Yellow','Blue'],
    pattern:'Floral',
  },
  {
    id:7,
    image:Men7,
    category:'Casual Shirts',
    brand:'RoadSter',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Black','Grey'],
    pattern:'Printed',
  },
  {
    id:8,
    image:Men8,
    category:'Casual Shirts',
    brand:'HERE & NOW',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White','Blue'],
    pattern:'Floral',
  },
  {
    id:9,
    image:Men9,
    category:'Casual Shirts',
    brand:'WROGN',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S'],
    color:['White','Blue'],
    pattern:'Checked',
  },
  {
    id:10,
    image:Men10,
    category:'Casual Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White'],
    pattern:'Solid',
  },
  {
    id:11,
    image:Men11,
    category:'Casual Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Red','Blue','Black'],
    pattern:'Checked',
  },
  {
    id:12,
    image:Men12,
    category:'Casual Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Pink'],
    pattern:'Solid',
  },
  {
    id:13,
    image:Men13,
    category:'Casual Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White','Blue'],
    pattern:'Stripe',
  },
  {
    id:14,
    image:Men14,
    category:'Casual Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue'],
    pattern:'Solid',
  },
  {
    id:15,
    image:Men15,
    category:'Casual Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White','Black'],
    pattern:'Stripe',
  },
  {
    id:16,
    image:Men16,
    category:'Casual Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit & casual shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue'],
    pattern:'Solid',
  },
  {
    id:17,
    image:Men17,
    category:'T-Shirts',
    brand:'WROGN',
    name:'Mens slim fit T-shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue,Maroon,.White'],
    pattern:'Solid',
  },
  {
    id:18,
    image:Men18,
    category:'T-Shirts',
    brand:'The Indian Garage Co',
    name:'Mens slim fit T-shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Teal','Navy'],
    pattern:'Floral',
  },
  {
    id:19,
    image:Men19,
    category:'T-Shirts',
    brand:'HERE & NOW',
    name:'Mens slim fit T-shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue','Yellow'],
    pattern:'Floral',
  },
  {
    id:20,
    image:Men20,
    category:'T-Shirts',
    brand:'HIGHLANDER',
    name:'Mens slim fit T-shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Pink'],
    pattern:'Solid',
  },
  {
    id:21,
    image:Men21,
    category:'T-Shirts',
    brand:'RoadSter',
    name:'Mens slim fit T-shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White','Blue','Pink'],
    pattern:'Stripe',
  },
  {
    id:22,
    image:Men22,
    category:'T-Shirts',
    brand:'The Indian Garage Co',
      name:'Mens slim fit T-shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White','Red','Blue'],
    pattern:'Stripe',
  },
  {
    id:23,
    image:Men23,
    category:'Formal Shirts',
    brand:'RoadSter',
    name:'Mens Formal shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Pink'],
    pattern:'Solid',
  },
  {
    id:24,
    image:Men24,
    category:'Formal Shirts',
    brand:'HERE & NOW',
    name:'Mens Formal shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue'],
    pattern:'Solid',
  },
  {
    id:25,
    image:Men25,
    category:'Formal Shirts',
    brand:'WROGN',
    name:'Mens Formal shirt',
    price:'1000',
    previous_price:'1200',
    size:['S'],
    color:['Teal'],
    pattern:'Solid',
  },
  {
    id:26,
    image:Men26,
    category:'Formal Shirts',
    brand:'The Indian Garage Co',
    name:'Mens Formal shirt',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Grey'],
    pattern:'Solid',
  },
  {
    id:27,
    image:Men27,
    category:'Blazers',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White'],
    pattern:'Solid',
  },
  {
    id:28,
    image:Men28,
    category:'Blazers',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue'],
    pattern:'Solid',
  },
  {
    id:29,
    image:Men29,
    category:'Blazers',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Blue'],
    pattern:'Solid',
  },
  {
    id:30,
    image:Men30,
    category:'Blazers',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Pink'],
    pattern:'Solid',
  },
  {
    id:31,
    image:Men31,
    category:'Blazers',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Black'],
    pattern:'Solid',
  },
  {
    id:32,
    image:Men32,
    category:'Blazers',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Maroon'],
    pattern:'Solid',
  },
  {
    id:33,
    image:Men33,
    category:'Jackets',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Black'],
    pattern:'Solid',
  },
  {
    id:34,
    image:Men34,
    category:'Jackets',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Grey'],
    pattern:'Solid',
  },
  {
    id:35,
    image:Men35,
    category:'Jackets',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['White'],
    pattern:'Solid',
  },
  {
    id:36,
    image:Men36,
    category:'Jackets',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Maroon'],
    pattern:'Solid',
  },
  {
    id:37,
    image:Men37,
    category:'Jackets',
    brand:'The Indian Garage Co',
    name:'Mens Occasional Suit',
    price:'1000',
    previous_price:'1200',
    size:['S','M','L'],
    color:['Navy'],
    pattern:'Solid',
  },
];
function FilterContent({ val }) {
  const itemsPerPage = 16;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const filteredItems = top_wear_collection.filter((item) => {
    return (
      (val.category.length === 0 || val.category.includes(item.category)) &&
      (val.size.length === 0 || val.size.some((size) => item.size.includes(size))) &&
      (val.color.length === 0 || val.color.some((color) => item.color.includes(color))) &&
      (val.pattern.length === 0 || val.pattern.includes(item.pattern))
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