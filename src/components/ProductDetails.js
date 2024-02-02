import React from "react";
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
function ProductDetails() {
  const { id } = useParams();
  const{category}=useParams();
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
  return (
    <div>
      <h3>{item.brand}</h3>
      <h5>{item.name}</h5>
      <img src={item.image[0]} alt="" />
      <h3>{category}</h3>
    </div>
  );
}

export default ProductDetails;
