import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Welcome.css';

function Welcome() {
  return (
    <div className='circles-container'>
      <div className='circle1'></div>
      <div className='mini1'></div>
      <div className='mini3'></div>
      <div className='mini6'></div>
      <div className='circle2'>Shopping Website</div>
      <div className='mini2'></div>
      <div className='content'></div>
      <div className='mini1'></div>
      <div className='mini4'></div>
      <div className='circle3'>
        <h2 className='contact'>Contact Us</h2>
        <div className='social-icons'>
          <FontAwesomeIcon icon={faFacebook} className='social-icon' />
          <FontAwesomeIcon icon={faTwitter} className='social-icon' />
          <FontAwesomeIcon icon={faInstagram} className='social-icon' />
        </div>
      </div>
      <div className='mini2'></div>
      <div className='mini1'></div>
      <div className='mini5'></div>
      <div className='circle4'></div>
    </div>
  );
}

export default Welcome;
