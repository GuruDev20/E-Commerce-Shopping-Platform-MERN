import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Men.css';
import Menimage from '../../assets/men1.jpg';
function Men() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext();
            }
        }, 4000);

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
                        <img src={Menimage} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Menimage} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Menimage} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Menimage} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Menimage} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Menimage} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Menimage} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Menimage} alt='menimage' className='card-img' />
                    </div>
                    <div className='cards'>
                        <img src={Menimage} alt='menimage' className='card-img' />
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
