import React from 'react';
import './article.scss';


const Article = ({imgUrl,date,title}) => {
  return (
    <div className='deezi_article'>
      <div className='image'>
            <img src={imgUrl} alt="" />
      </div>
      <div className='content'>
      <p>{date}</p>
      <h3>{title}</h3>
      </div>

    </div>
  )
}

export default Article