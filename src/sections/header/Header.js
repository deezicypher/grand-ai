import React from 'react'
import './header.scss'
import image from '../../assets/img/mind.png'
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div className='deezi_header section_padding' id="home">
     <div className='content'>
      <div className='container'>

      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("<h1>AI Designs Quantum Physics Experiments beyond What Any Human Has Conceived</h1>")
      .pauseFor(2500)
      .typeString(" <p>Revolutionary artificial intelligence makes quantum physics 99.99% simpler</p>")
      .start()
  }}
/>   
     
      </div>
      <div className='image'>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header