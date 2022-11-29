import React from 'react'
import './header.scss'
import image from '../../assets/img/mind.png'

const Header = () => {
  return (
    <div className='zigi_header section_padding' id="home">
     <div className='content'>
      <div className='container'>
      <h1 className='gradient_text'>AI Designs Quantum Physics Experiments beyond What Any Human Has Conceived</h1>     
      <p>Revolutionary artificial intelligence makes quantum physics 99.99% simpler</p>
      </div>
      <div className='image'>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header