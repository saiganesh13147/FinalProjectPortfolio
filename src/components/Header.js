import React from 'react'
import Typed from 'react-typed'
const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1></h1>
        <Typed
          className='typed-text'
          strings={[
            'Web Developer',
            'Cloud Integration Developer',
            'Full Stack Developer',
            'JavaScript Developer',
          ]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
        <a href='#' className='btn-main-offer'>
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Header
