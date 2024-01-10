import React, { useRef } from 'react';
import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Women.css'
import Womenimage from '../../assets/women1.jpg'
function Women() {
  const sliderRef = useRef(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
      <div className='women-container'>
        <div className='women-left rev'>
            <img src={Womenimage} alt='womenimage' className='womenimage' />
        </div>
        <div className='women-right reveal'>Women's Collections</div>
        <div className='women-slider revv'>
            <Slider {...settings} className='women-center ' ref={sliderRef}>
                <div className='cards'>
                    <img src={Womenimage} alt='womenimage' className='card-img' />
                </div>
                <div className='cards'>
                    <img src={Womenimage} alt='womenimage' className='card-img' />
                </div>
                <div className='cards'>
                    <img src={Womenimage} alt='womenimage' className='card-img' />
                </div>
                <div className='cards'>
                    <img src={Womenimage} alt='womenimage' className='card-img' />
                </div>
                <div className='cards'>
                    <img src={Womenimage} alt='womenimage' className='card-img' />
                </div>
                <div className='cards'>
                    <img src={Womenimage} alt='womenimage' className='card-img' />
                </div>
                <div className='cards'>
                    <img src={Womenimage} alt='womenimage' className='card-img' />
                </div>
                <div className='cards'>
                    <img src={Womenimage} alt='womenimage' className='card-img' />
                </div>
                <div className='cards'>
                    <img src={Womenimage} alt='womenimage' className='card-img' />
                </div>
                
            </Slider>
            <div className='slider-arrows'>
                <MdKeyboardArrowLeft className='slider-arrow left' onClick={() => sliderRef.current.slickPrev()} />
                <MdKeyboardArrowRight className='slider-arrow right' onClick={() => sliderRef.current.slickNext()} />
            </div>
        </div>
      </div>
    )
}

export default Women