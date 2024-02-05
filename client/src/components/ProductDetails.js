import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/ProductDetails.css'
import { useParams } from "react-router-dom";
import { top_wear_collection } from './data/Men.Topwear';
import { bottom_wear_collection } from './data/Men.Bottomwear';
import {mens_footwear} from './data/Mens.Footwear';
import {mens_gadgets} from './data/Mens.Gadgets';
import {men_accessories} from './data/Mens.Accesories';
import {women_top_wear} from './data/Women.Topwear';
import {women_bottom_wear} from './data/Women.Bottomwear';
import {women_foot_wear} from './data/Women.Footwear';
import { women_gadgets } from './data/Women.Gadgets';
import { women_accessories } from './data/Women.Accessories';
import {kids_boys} from './data/Boys';
import {kids_girls} from './data/Girls';
import {kids_footwear} from './data/Footwear';
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
function ProductDetails() {
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
  
  const { id } = useParams();
  const{category}=useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      case 'Womens-Top-wear':
        return women_top_wear;
      case 'Womens-Bottom-wear':
        return women_bottom_wear;
      case 'Womens-Footwear':
        return women_foot_wear;
      case 'Womens-Gadgets':
        return women_gadgets;
      case 'Womens-Accessories':
        return women_accessories;
      case 'Kids-Boys':
        return kids_boys;
      case 'Kids-Girls':
        return kids_girls;
      case 'Kids-Footwear':
        return kids_footwear;
      default:
        return [];
    }
  };
  const item = getCollection(category).find((item) => item.id ===Number(id));
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.image.length);
  };
  const addToCart = () => {
    console.log("Adding " + id + " to cart");
  };

  const addToWishlist = () => {
    console.log("Wishlist " + id);
  };

  const buyNow = () => {
    console.log("Buy " + id);
  };
  return (
    <div val={{suc}}>
      <Navbar />
      <div className="product">
        <div className="product-left">
          <div className="product-main">
            <img src={item.image[currentImageIndex]} alt="" />
          </div>
          <div className="product-images">
            {item.image.map((imageData, index) => (
              <img
                key={index}
                src={imageData}
                alt={`Product ${index + 1}`}
                className={`product-image ${index === currentImageIndex ? 'yes' : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-right">
          <div className="product-brand">{item.brand}</div>
          <div className="product-names">{item.name}</div>
          <div className="product-ratings">4.1K</div>
          <div className="horizontal-divider"></div>
          <div className="selected-product-price">
            <div className="product-price">&#8377;{item.price}</div>
            <div className="product-previous-price">&#8377;{item.previous_price}</div>
          </div>
          <div className="product-colors">
            {item.color.map((colordata,index)=>(
              <div key={index} className="list-color">
                <div className="color-product" style={{ background: colordata.toLowerCase() }}></div>
                <div className="color-product-name">{colordata}</div>
              </div>
            ))}
          </div>
          <div className="product-sizes">
            {item.size.map((sizedata,index)=>(
              <div className="sizes" key={index}>{sizedata}</div>
            ))}
          </div>
          <div className="product-buttons">
            <div className="two-button-same-line">
              <button className="addToBag" onClick={addToCart}><FaShoppingCart size={25} className="button-icon "/>Add to bag</button>
              <button className="whislist-product" onClick={addToWishlist}><CiHeart size={25} className="button-icon "/>WishList</button>
            </div>
            <div className="buy-button">
              <button className="buy" onClick={buyNow}>Buy Now</button>
            </div>
          </div>
          <div className="horizontal-divider"></div>
          <div className="more-product-details">
            <div className="product-names">{item.name}</div>
            <div className="product-patterns">Pattern: {item.pattern}</div>
          </div>
          <div className="product-descriptions">
            A men's slim-fit shirt is a tailored and form-fitting garment designed to complement the body's natural contours, providing a sleek and modern appearance. Characterized by a narrower cut through the chest, waist, and sleeves, the slim-fit shirt offers a more tailored silhouette compared to regular or traditional fit shirts.
            These shirts are designed to enhance a man's physique and create a polished, contemporary look. They typically feature a narrower shoulder width, higher armholes, and a tapered waistline, contributing to a more streamlined and stylish appearance. The sleeves of a men's slim-fit shirt are also narrower, providing a well-proportioned fit.
            Men's slim-fit shirts are versatile and can be worn for various occasions, ranging from formal settings when paired with dress pants or a suit, to more casual environments when combined with jeans or chinos. The modern and tailored design makes them a popular choice for those who prefer a more fitted and fashionable look in their clothing. Available in a variety of fabrics, colors, and patterns, men's slim-fit shirts offer a contemporary style while maintaining a classic and timeless appeal.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ProductDetails