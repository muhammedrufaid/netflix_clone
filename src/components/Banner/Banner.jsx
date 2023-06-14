import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_button'>
                <button className='button'> play</button>
                <button className='button'> My list</button>
            </div>
            <h1 className='description'>Lorem ipsum  lab voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner