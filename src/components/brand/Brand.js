import React from 'react';
import meta from '../../assets/img/meta.png';
import tesla from '../../assets/img/tesla.png';
import github from '../../assets/img/github.png';
import google from '../../assets/img/google.png'; 
import oculus from '../../assets/img/oculus.png'; 
import './brand.scss';

const Brand = () => {
  return (
    <div className='brand section_padding'>
      <div className='icon'>
            <img src={meta} alt="" />
      </div>

      <div className='icon'>
            <img src={oculus} alt="" />
      </div>

      <div className='icon'>
            <img src={google} alt="" />
      </div>

      <div className='icon'>
            <img src={tesla} alt="" />
      </div>

      <div className='icon'>
            <img src={github} alt="" />
      </div>


    </div>
  )
}

export default Brand