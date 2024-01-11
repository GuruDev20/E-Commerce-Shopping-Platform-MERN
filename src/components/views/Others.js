import React from 'react';
import '../../styles/Others.css';
import Menimg from '../../assets/men1.jpg';

function Others() {
    return (
        <div className='others-container'>
            <div className='others-content'>SHOP BY CATEGORY</div>
            <div className='others-slider'>
                <div className='others'>
                    <img src={Menimg} alt='otherimg' className='otherimg' />
                </div>
                <div className='others'>
                    <img src={Menimg} alt='otherimg' className='otherimg' />
                </div>
                <div className='others'>
                    <img src={Menimg} alt='otherimg' className='otherimg' />
                </div>
                <div className='others'>
                    <img src={Menimg} alt='otherimg' className='otherimg' />
                </div>
                <div className='others'>
                    <img src={Menimg} alt='otherimg' className='otherimg' />
                </div>
                <div className='others'>
                    <img src={Menimg} alt='otherimg' className='otherimg' />
                </div>
                <div className='others'>
                    <img src={Menimg} alt='otherimg' className='otherimg' />
                </div>
                <div className='others'>
                    <img src={Menimg} alt='otherimg' className='otherimg' />
                </div>
            </div>
        </div>
    );
}

export default Others;
