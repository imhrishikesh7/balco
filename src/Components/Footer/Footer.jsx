import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<div className='footer-container'>
  <div className='marginal-footer'>
    <div className='row align-items-center justify-content-between'>
      <div className='col-md-auto'>
        <p className='m-0'>© 2024 Bharat Aluminium Company Limited</p>
      </div>
      <div className='col-md-auto'>
        <p className='m-0'>
          Designed and Developed by
          <a href="https://www.kalolwala.com">
            <img src="./homepage/logo-k&a.png" alt="" className='footer-logo' />
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer