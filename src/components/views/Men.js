import React from 'react'
import '../../styles/Men.css';
import Men from '../../assets/men1.jpg'
function view2() {
  return (
    <div>
      <div className='mens-coll'>
        <div className='men-left rev'>Men's Collection</div>
        <div className='men-right reveal'>
          <img src={Men} alt="men" className='men-img'/>
        </div>
      </div>
    </div>
  )
}

export default view2