import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/FilterContent.css';
import { FaStar } from 'react-icons/fa';
import { BsBagHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function FilterContent({ val, category }) {
    const [items, setItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState(12);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/items/${category}`);
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);

    const filteredItems = items.filter((item) => {
        const priceRange = val.price.length > 0 ? val.price[0].split('-').map(Number) : null;
        const isPriceInRange = priceRange
            ? item.price >= priceRange[0] && item.price <= priceRange[1]
            : true;

        return (
            (val.category.length === 0 || val.category.includes(item.type)) &&
            (val.size.length === 0 || val.size.some((size) => item.size.includes(size))) &&
            (val.color.length === 0 || val.color.some((color) => item.color.includes(color))) &&
            (val.pattern.length === 0 || val.pattern.includes(item.pattern)) &&
            isPriceInRange
        );
    });

    const visibleItemsData = filteredItems.slice(0, visibleItems);

    const handleExploreMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
    };

    const getUserEmail = () => {
        const token = localStorage.getItem('token');
        let user = [];
        user = token.split(',');
        return user[1];
    };

    const addToCart = async (itemId) => {
        try {
            const userEmail = getUserEmail();
            console.log(userEmail);
            await axios.post('http://localhost:4000/addToCart', {
                userEmail: userEmail,
                productId: itemId
            });

            alert('Item added to cart successfully!');
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    return (
        <div>
            <section className="card-container">
                {visibleItemsData.map((item) => (
                    <Link to={`/cloths/men-top-wear/details/${category}/${item._id}`} className="link-to-more" key={item.id}>
                        <section className="card-list" key={item.id}>
                            <img src={require(`../../../src/uploads/${item.images[0]}`)} alt={item.name} className='card-img-result' />
                            <div className="card-details">
                                <h3 className="card-title">{item.brand}</h3>
                                <h5 className="card-title">{item.name}</h5>
                                <section className="card-reviews">
                                    <FaStar className="ratings-start" />
                                    <FaStar className="ratings-start" />
                                    <FaStar className="ratings-start" />
                                    <FaStar className="ratings-start" />
                                    <span className="total-reviews">4</span>
                                </section>
                                <section className="card-price">
                                    <div className="price-item">
                                        &#8377;{item.price}
                                    </div>
                                    <div className="bag" onClick={() => addToCart(item._id)}>
                                        <BsBagHeartFill className="bag-icon" size={20} />
                                    </div>
                                </section>
                            </div>
                        </section>
                    </Link>
                ))}
            </section>
            {visibleItems < filteredItems.length && (
                <div className="explore-more-container">
                    <button className="explore-more-results" onClick={handleExploreMore}>
                        Explore more
                    </button>
                </div>
            )}
        </div>
    );
}

export default FilterContent;
