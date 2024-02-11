import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Women.css';
import Womenimage from '../../assets/Womens/women1.jpg'
import Women3 from '../../assets/Womens/Women3.png'
import Women7 from '../../assets/Womens/Women7.png'
import Women12 from '../../assets/Womens/Women12.png'
import Women19 from '../../assets/Womens/Women19.png'
import Women18 from '../../assets/Womens/Women18.png'
import Women1 from '../../assets/Womens/Women1.png'
function Women() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext();
            }
        }, 6000);

        return () => clearInterval(interval);
    }, []);

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
        autoplay: true,
        autoplaySpeed: 6000,
    };
    return (
      <div className='women-container'>
        <div className='women-left rev'>
            <img src={Womenimage} alt='womenimage' className='womenimage' />
        </div>
        <div className='women-right reveal'>Women's Collections</div>
        <div className='women-slider revv'>
            <Slider {...settings} className='women-center ' ref={sliderRef}>
                <div className='cardsi'>
                    <img src={Women3} alt='womenimage' className='card-img' />
                </div>
                <div className='cardsi'>
                    <img src={Women7} alt='womenimage' className='card-img' />
                </div>
                <div className='cardsi'>
                    <img src={Women12} alt='womenimage' className='card-img' />
                </div>
                <div className='cardsi'>
                    <img src={Women19} alt='womenimage' className='card-img' />
                </div>
                <div className='cardsi'>
                    <img src={Women18} alt='womenimage' className='card-img' />
                </div>
                <div className='cardsi'>
                    <img src={Women1} alt='womenimage' className='card-img' />
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