import React, { useState } from 'react';
import '../styles/Others.css';
import Menimg from '../assets/men1.jpg';

function Others() {
    const categories = [
        { id: 1, name: 'Mens' },
        { id: 2, name: 'Womens' },
        { id: 3, name: 'Kids' },
        { id: 4, name: 'Watches' },
        { id: 5, name: 'Foods & Drinks' },
        { id: 6, name: 'Home & Gardens' },
        { id: 7, name: 'Toys & Gifts' },
        { id: 8, name: 'Accessories' },
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

    const handleClick = () => {
        console.log('Shop Now clicked!');
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
                        <img src={Menimg} alt={`otherimg${index}`} className=' otherimg' />
                        <div className='overlay' onClick={handleClick}>
                            Shop Now
                        </div>
                        <h2 className='others-card-content'>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Others;
