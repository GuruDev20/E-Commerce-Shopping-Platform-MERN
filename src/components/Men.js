import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Men.css';
import Menimage from '../assets/Mens/men1.jpg';
import Men1 from '../assets/Mens/Men1.png';
import Men2 from '../assets/Mens/Men2.png';
import Men3 from '../assets/Mens/Men3.png';
import Men4 from '../assets/Mens/Men4.png';
import Men5 from '../assets/Mens/Men5.png';
import Men6 from '../assets/Mens/Men6.png';
function Men() {
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
        <div className='men-container'>
            <div className='men-left rev'>Men's Collections</div>
            <div className='men-right reveal'>
                <img src={Menimage} alt='menimage' className='menimage' />
            </div>
            <div className='men-slider revv'>
                <Slider {...settings} className='men-center' ref={sliderRef}>
                    <div className='cards'>
                        <img src={Men1} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Men2} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Men3} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Men4} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Men5} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Men6} alt='menimage' className='card-img' />
                    </div>
                </Slider>
                <div className='slider-arrows'>
                    <MdKeyboardArrowLeft className='slider-arrow left' onClick={() => sliderRef.current.slickPrev()} />
                    <MdKeyboardArrowRight className='slider-arrow right' onClick={() => sliderRef.current.slickNext()} />
                </div>
            </div>
        </div>
    );
}

export default Men;
