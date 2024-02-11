import React, { useState } from 'react';
import '../../styles/Others.css';
import Women10 from '../../assets/Womens/Women10.png'
import Boys11 from '../../assets/kids/Boys11.png'
import Men7 from '../../assets/Mens/Men7.png'
import Girls3 from '../../assets/kids/Girls3.png'
import Men3 from '../../assets/new/Men3.png'
import { Link } from 'react-router-dom';

function Others() {
    const categories = [
        { id: 1, name: 'Mens', img: Men7, category: 'men-top-wear' },
        { id: 2, name: 'Womens', img: Women10, category: 'women-top-wear' },
        { id: 3, name: 'Boys', img: Boys11, category: 'kids-boys' },
        { id: 4, name: 'Girls', img: Girls3, category: 'kids-girls' },
        { id: 5, name: 'New Arrivals', img: Men3, category: 'newarrivals' },
    ];

    const [hoveredStates, setHoveredStates] = useState(Array(categories.length).fill(false));

    const handleHover = (index) => {
        setHoveredStates((prev) => {
            const newHoveredStates = [...prev];
            newHoveredStates[index] = true;
            return newHoveredStates;
        });
    };

    const handleUnhover = (index) => {
        setHoveredStates((prev) => {
            const newHoveredStates = [...prev];
            newHoveredStates[index] = false;
            return newHoveredStates;
        });
    };

    return (
        <div className='others-container'>
            <div className='others-content'>SHOP BY CATEGORY</div>
            <div className='others-slider'>
                {categories.map((category, index) => (
                    <div
                        key={category.id}
                        className={`others ${hoveredStates[index] ? 'hovered' : ''}`}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleUnhover(index)}
                    >
                        <img src={category.img} alt={`otherimg${index}`} className='otherimg' />
                        {category.category === 'newarrivals' ? (
                            <Link to={`/${category.category}`} reloadDocument>
                                <div className='overlay'>
                                    Shop Now
                                </div>
                            </Link>
                        ) : (
                            <Link to={`/cloths/${category.category}`} reloadDocument>
                                <div className='overlay'>
                                    Shop Now
                                </div>
                            </Link>
                        )}
                        <h2 className='others-card-content'>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Others;
