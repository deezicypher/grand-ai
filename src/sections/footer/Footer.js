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
<p><a href="https://github.com/deezitheviper"><AiFillGithub fontSize={55}/></a></p>
<p> <a href="https://github.com/deezitheviper">Deezitheviper</a></p>
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
            <p><a href="mailto:deezitheviper@gmail.com">deezitheviper@gmail.com</a></p>
          </div>
        </div>

        <div className='copyright'><p>&copy; 2022 deezitheviper</p> </div>
    </div>
  )
}

export default Footer