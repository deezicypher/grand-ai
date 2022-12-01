import React from 'react';
import './potential.scss';
import oculus from '../../assets/img/metaquest.png';

const Potential = () => {
  return (
    <div className='deezi_potential section_padding'>
      <div className='potential_image'>
       <img src={oculus} alt="" />
      </div>
      <div className='potential_content'>
        <h4 className='gradient_text'>Powered by AI: Oculus Insight</h4>
        <h1 className='gradient_text'>
        How it is Better than Everything that came Before
        </h1>
        <p>The new tech has many exciting things for a consumer of VR technologies. The new Oculus headset will be free of any cable attachments and will be the first of its kind to incorporate tracking based solely on computer vision, with the help of monochrome cameras and without the use of any additional equipment, which not only incorporate the use of expensive hardware but with the use of gloves etc also make the user experience unnatural and the tracking process cumbersome. It makes use of the four cameras [5], along with the new techniques in the field of machine learning models that are able to track the depths and positions of the hands to a great accuracy. This enables the new device to be built at a fraction of the existing technologies in terms of all the important parameters.</p>
      </div>
    </div>
  )
}

export default Potential