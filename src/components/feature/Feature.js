import React from 'react'
import './feature.scss';

const Feature = ({title,text}) => {
  return (
    <div className='deezi_feature'>
      <div className='feature_container'>
        <div/>
        <h1 className='gradient_text'>{title}</h1>
        <p className='text'>{text}</p>
      </div>

    </div>
  )
}

export default Feature