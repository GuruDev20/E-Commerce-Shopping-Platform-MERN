import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/ProductDetails.css';
import { FaShoppingCart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

function ProductDetails() {
    const navigate = useNavigate();
    const { id, category } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:4000/products/${id}`)
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, [navigate, id, category]);

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
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

    if (!product) {
        return <div>Loading...</div>;
    }

    const { images, brand, name, price, color, size, pattern } = product;
    console.log(product);
    return (
        <div>
        <Navbar />
        <div className="product">
            <div className="product-left">
            <div className="product-main">
                <img src={require(`../../../src/uploads/${product.images[currentImageIndex]}`)} alt={product.name} />
            </div>
            <div className="product-images">
                {images.map((imageData, index) => (
                <img
                    key={index}
                    src={require(`../../../src/uploads/${imageData}`)}
                    alt={`Product ${index + 1}`}
                    className={`product-image ${index === currentImageIndex ? 'yes' : ''}`}
                    onClick={() => handleImageClick(index)}
                />
                ))}
            </div>
            </div>
            <div className="product-right">
            <div className="product-brand">{brand}</div>
            <div className="product-names">{name}</div>
            <div className="horizontal-divider"></div>
            <div className="selected-product-price">
                <div className="product-price">&#8377;{price}</div>
            </div>
            <div className="product-colors">
                {color.map((colordata,index)=>(
                <div key={index} className="list-color">
                    <div className="color-product" style={{ background: colordata.toLowerCase() }}></div>
                    <div className="color-product-name">{colordata}</div>
                </div>
                ))}
            </div>
            <div className="product-sizess">
                {size.map((sizedata,index)=>(
                <div className="sizess" key={index}>{sizedata}</div>
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
                <div className="product-names">{name}</div>
                <div className="product-patterns">Pattern: {pattern}</div>
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

export default ProductDetails;
