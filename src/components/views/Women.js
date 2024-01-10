import React from 'react'
import '../../styles/Women.css'
import Womenimage from '../../assets/women1.jpg'
function Women() {
  return (
    <div className='women-container'>
      <div className='women-left rev'>
          <img src={Womenimage} alt='womenimage' className='womenimage' />
      </div>
      <div className='women-right reveal'>Women's Collections</div>
    </div>
  )
}

export default Women