import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/ProductDetails.css';
import { FaShoppingCart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { BsStars } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';
function ProductDetails() {
    const navigate = useNavigate();
    const { id, category } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [items, setItems] = useState([]);
    const [userReview, setUserReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const [showAllReviews, setShowAllReviews] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:4000/products/${id}`)
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, [navigate, id, category]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/itemsExcept/${category}/${id}`);
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id,category]);
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/reviews/${id}`);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, [id]);

    const getUserEmail = () => {
        const token = localStorage.getItem('token');
        let user = [];
        user = token.split(',');
        return user[1];
    };

    const addToCart = async (itemId) => {
        try {
            const userEmail = getUserEmail();
            // console.log(userEmail);
            await axios.post('http://localhost:4000/addToCart', {
                userEmail: userEmail,
                productId: itemId
            });
            navigate('/cart')
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const addToWishlist = async(itemId) => {
        try {
            const userEmail = getUserEmail();
            // console.log(userEmail);
            await axios.post('http://localhost:4000/wishlist', {
                userEmail: userEmail,
                productId: itemId
            });
            navigate('/whislist')
        } catch (error) {
            console.error('Error adding item to wishlist:', error);
        }
    };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const submitReview = async () => {
        try {
            const userEmail = getUserEmail();
            await axios.post('http://localhost:4000/addReview', {
                userEmail: userEmail,
                productId: id,
                review: userReview
            });
            setReviews([...reviews, userReview]);
            setUserReview('');
            window.location.reload();
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const {images, brand, name, price, color, size, pattern } = product;
    const displayedReviews = showAllReviews ? reviews.slice(4) : reviews.slice(0, 4);
    // console.log(product);
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
                    <button className="addToBag"onClick={() => addToCart(product._id)}><FaShoppingCart size={25} className="button-icon "/>Add to bag</button>
                    <button className="whislist-product" onClick={() => addToWishlist(product._id)}><CiHeart size={25} className="button-icon "/>WishList</button>
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
                <div className="horizontal-divider"></div>
                <div className='product-ratings'>
                    <div className='ratings-head'>Ratings<BsStars className='ratings-icons' size={20}/></div>
                    <div className='ratings-body'>
                        <div className='ratings-count'>4k<IoMdStar className='ratings-icons1'/></div>
                        <div className='ver-divider'></div>
                        <div className="ratings-by">
                            <div className="ratings-5">5<IoMdStar /><progress value="80" max="100">80%</progress><div className="ratings-5-count">100</div></div>
                            <div className="ratings-4">4<IoMdStar /><progress value="20" max="100">20%</progress><div className="ratings-4-count">10</div></div>
                            <div className="ratings-3">3<IoMdStar /><progress value="50" max="100">50%</progress><div className="ratings-3-count">50</div></div>
                            <div className="ratings-2">2<IoMdStar /><progress value="30" max="100">30%</progress><div className="ratings-2-count">30</div></div>
                            <div className="ratings-1">1<IoMdStar /><progress value="5" max="100">5%</progress><div className="ratings-1-count">5</div></div>
                        </div>
                    </div>
                </div>
                <div className="horizontal-divider"></div>
                <div className='reviews-products'>
                    <div className='reviews-head'>Customer Reviews</div>
                    <div className='reviews-body'>
                        <div className='user-review'>
                            <input 
                                type="text" 
                                placeholder='Enter your reviews' 
                                className='review-product-user' 
                                value={userReview}
                                onChange={(e) => setUserReview(e.target.value)}
                            />
                            <button className='submit-review' onClick={submitReview}>Add Review</button>
                        </div>
                        <div className='user-product-reviews'>
                            {displayedReviews.map((review, index) => (
                                <React.Fragment key={index}>
                                    <div className='rating-text'>{review.review}</div>
                                    <div className='user-time'>
                                        <div className='username'>By {review.username}</div>|
                                        <div className='time'>{formatDate(review.createdAt)}</div>
                                    </div>
                                    {index !== displayedReviews.length - 1 && <div className="horizontal-divider"></div>}
                                </React.Fragment>
                            ))}
                        </div>
                        {reviews.length > 4 && !showAllReviews && (
                            <button className="show-more-reviews" onClick={() => setShowAllReviews(true)}>Show More</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div className='similar-products'>
            Similar Products
            <div className='similar-card'>
                {items.map((item) => (
                    <Link to={`/cloths/men-top-wear/details/${category}/${item._id}`} className="link-to-more" key={item.id} reloadDocument>
                        <section className="similar-list" key={item.id}>
                            <img src={require(`../../../src/uploads/${item.images[0]}`)} alt={item.name} className='similar-img-result' />
                            <div className="similar-details">
                                <h3 className="similar-title">{item.brand}</h3>
                                <section className="similar-price">
                                    <div className="price-item-similar">
                                        &#8377;{item.price}
                                    </div>
                                </section>
                            </div>
                        </section>
                    </Link>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default ProductDetails;
