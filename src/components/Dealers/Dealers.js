import React from 'react'
import '../../styles/Dealers.css'
function Dealers() {
  return (
    <div className='dealers'>
      <div className='dealers-left'>
        <div className='dealers-header'>
          <div className='dealers-name'>Dealers</div>
          <div className='dealers-log'>Logouticon</div>
        </div>
        <div className='divider'></div>
        <div className='dealers-dash'>Dashboard</div>
      </div>
      <div className='dealers-right'>
        <div className='dealers-right-header'>
          {/* toggle icon
          message icon */}
        </div>
        <div className='dealers-body'>
          <div className='dealers-products-list'></div>
        </div>
      </div>
    </div>
  )
}

export default Dealers