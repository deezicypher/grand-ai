import React from 'react'
import './footer.scss'
import deezi from '../../assets/img/deezi1.png';
import {AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='deezi_footer section_padding'>
      <div className='heading'>
        <h1 className='gradient_text' >Join others now, and widen your horizons</h1>
        </div>
        <div className='button'>
          <button>Join Now</button>
        </div>
<div className='github'>
<p><AiFillGithub fontSize={55}/> </p>
<p> Deezitheviper</p>
</div>
        <div className='footer_links'>
          <div className='logo'>
            <img src={deezi} />
            <p>DeeziTheViper</p>
          </div>
          <div className='links'>
            <p>AI </p>
            <p>Deep Learning</p>
            <p>Machine Learning</p>
          </div>
          <div className='links'>
            <p>Multilayer Perceptron Networks. </p>
            <p>Convolutional Neural Networks</p>
            <p>Recurrent Neural Networks.</p>
          </div>
          <div className='links'>
            <h4>Get in Touch</h4>
           <p><AiFillGithub fontSize={35}/>  deezitheviper</p>
            <p>deezitheviper@gmail.com</p>
          </div>
        </div>
    </div>
  )
}

export default Footer