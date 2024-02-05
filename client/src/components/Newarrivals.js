import React, { useEffect, useState,useRef } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import '../styles/Newarrivals.css'
import Men1 from '../assets/new/Men1.png'
import Men2 from '../assets/new/Men2.png'
import Women1 from '../assets/new/Women1.png'
import Women3 from '../assets/new/Women3.png'
import Girl from '../assets/new/Girl.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
function Newarrivals() {
    const navigate = useNavigate();
  const[suc,setSuc]=useState();
  axios.defaults.withCredentials=true;
  useEffect(() => {
  axios.get('http://localhost:4000/users/', { withCredentials: true })
    .then(res => {
      if (res.data === 'Users Dashboard Success') {
        setSuc("Success ok");
      } else {
        navigate('/notfound');
      }
    })
    .catch(err => console.log(err));
  }, [navigate]);
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
    <div className='newarrivals-container' val={{suc}}>
      <div className='new-content'>New Arrivals</div>
      <div className='new-des'>Welcome to our New Arrival section. Here you can get the wide range of fresh new collection of products that will surely add flavour to your wardrobe. Check out Rene's new collection to find your favourite style.</div>
      <div className='new-slider'>
        <Slider {...settings} className='new-center' ref={sliderRef}>
            <div className='news'>
                <img src={Men1} alt='neimage' className='new-img' />
            </div>
            <div className='news'>
                <img src={Women1} alt='neimage' className='new-img' />
            </div>
            <div className='news'>
                <img src={Men2} alt='neimage' className='new-img' />
            </div>
            <div className='news'>
                <img src={Girl} alt='neimage' className='new-img' />
            </div>
            <div className='news'>
                <img src={Women3} alt='neimage' className='new-img' />
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