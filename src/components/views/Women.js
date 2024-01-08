import React from 'react'
import '../../styles/Women.css'
import Women from '../../assets/women1.jpg'
function View3() {
  return (
    <div>
      <div className='women-coll'>
        <div className='women-left rev'>
          <img src={Women} alt="women" className='women-img'/>
        </div>
        <div className='women-right reveal'>Women's Collection</div>
      </div>
    </div>
  )
}

export default View3