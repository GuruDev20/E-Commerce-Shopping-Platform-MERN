import React,{ useRef, useEffect } from 'react'
import '../styles/Newarrivals.css'
import menimage from '../assets/men1.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
function Newarrivals() {
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
    <div className='newarrivals-container'>
      <div className='new-content'>New Arrivals</div>
      <div className='new-des'>Welcome to our New Arrival section. Here you can get the wide range of fresh new collection of products that will surely add flavour to your wardrobe. Check out Rene's new collection to find your favourite style.</div>
      <div className='new-slider'>
        <Slider {...settings} className='new-center' ref={sliderRef}>
            <div className='news'>
                <img src={menimage} alt='neimage' className='new-img' />
                <h3 className='item-des'>Shirt</h3>
                <h3 className='item-price'>100</h3>
                <div className='item-ratings'>⭐⭐⭐⭐⭐</div>
            </div>
            <div className='news'>
                <img src={menimage} alt='neimage' className='new-img' />
                <h3 className='item-des'>Shirt</h3>
                <h3 className='item-price'>100</h3>
                <div className='item-ratings'>⭐⭐⭐⭐⭐</div>
            </div>
            <div className='news'>
                <img src={menimage} alt='neimage' className='new-img' />
                <h3 className='item-des'>Shirt</h3>
                <h3 className='item-price'>100</h3>
                <div className='item-ratings'>⭐⭐⭐⭐⭐</div>
            </div>
            <div className='news'>
                <img src={menimage} alt='neimage' className='new-img' />
                <h3 className='item-des'>Shirt</h3>
                <h3 className='item-price'>100</h3>
                <div className='item-ratings'>⭐⭐⭐⭐⭐</div>
            </div>
            <div className='news'>
                <img src={menimage} alt='neimage' className='new-img' />
                <h3 className='item-des'>Shirt</h3>
                <h3 className='item-price'>100</h3>
                <div className='item-ratings'>⭐⭐⭐⭐⭐</div>
            </div>
            <div className='news'>
                <img src={menimage} alt='neimage' className='new-img' />
                <h3 className='item-des'>Shirt</h3>
                <h3 className='item-price'>100</h3>
                <div className='item-ratings'>⭐⭐⭐⭐⭐</div>
            </div>
            <div className='news'>
                <img src={menimage} alt='neimage' className='new-img' />
                <h3 className='item-des'>Shirt</h3>
                <h3 className='item-price'>100</h3>
                <div className='item-ratings'>⭐⭐⭐⭐⭐</div>
            </div>
        </Slider>
        <div className='new-arrows'>
            <MdKeyboardArrowLeft size={40} className='new-arrow left' onClick={() => sliderRef.current.slickPrev()} />
            <MdKeyboardArrowRight size={40} className='new-arrow right' onClick={() => sliderRef.current.slickNext()} />
        </div>
     </div>
    </div>
  )
}

export default Newarrivals