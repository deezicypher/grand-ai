import React from 'react'
import './features.scss';
import {Feature} from '../../components';


const featuresData = [
  {
    title:"Reactive AI ",
    text: "uses algorithms to optimize outputs based on a set of inputs. Chess-playing AIs, for example, are reactive systems that optimize the best strategy to win the game. Reactive AI tends to be fairly static, unable to learn or adapt to novel situations. Thus, it will produce the same output given identical inputs."
  },
  {
    title:"Limited memory AI",
    text: "can adapt to past experience or update itself based on new observations or data. Often, the amount of updating is limited (hence the name), and the length of memory is relatively short. Autonomous vehicles, for example, can read the road and adapt to novel situations, even learning from past experience."
  }
  ,
  {
    title:"Theory-of-mind AI",
    text: "are fully-adaptive and have an extensive ability to learn and retain past experiences. These types of AI include advanced chat-bots that could pass the Turing Test, fooling a person into believing the AI was a human being. While advanced and impressive, these AI are not self-aware."
  },
  {
    title:"Self-aware AI",
    text: "as the name suggests, become sentient and aware of their own existence. Still in the realm of science fiction, some experts believe that an AI will never become conscious or alive."
  }
  

]

const Features = () => {
  return (
    <div className='deezi_features section_padding'>
     
      <div className='features_heading'>
            <h1 className='gradient_text'>The applications for artificial intelligence are endless.</h1>
            <p>
            The technology can be applied to many different sectors and industries.
              </p>
      </div>
 
        
      <div className='features_container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index}/>
        ))}
            
      </div>
    </div>
  )
}

export default Features