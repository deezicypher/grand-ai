import React from 'react';
import './blog.scss';
import {Article} from '../../components';
import { tesladrive,machine,robotai, roboticmind, vrlady,neural } from '../../imports';

const Blog = () => {
  return (
    <div className='deezi_blog section_padding'>
      <div className='heading'>
        <h1 className='gradient_text'>Discover more from our Blog </h1>
      </div>
      <div className='container'>
          <Article imgUrl={tesladrive} date={"30th Nov 22 "} title={"Tesla Autopilot is a suite of advanced driver-assistance system (ADAS) "} />
          <Article imgUrl={vrlady} date={"30th Nov 22 "} title={"Stanford researchers are using artificial intelligence to create better virtual reality experiences"} />
          <Article imgUrl={machine} date={"30th Nov 22 "} title={"The goals of artificial intelligence include computer-enhanced learning, reasoning, and perception."} />
          <Article imgUrl={roboticmind} date={"30th Nov 22 "} title={"Some critics fear that the extensive use of advanced AI can have a negative effect on society."} />
          <Article imgUrl={robotai} date={"30th Nov 22 "} title={"Weak AI tends to be simple and single-task oriented, while strong AI carries on tasks that are more complex and human-like."} />
          <Article imgUrl={neural} date={"30th Nov 22 "} title={"Deep Learning is Hierarchical Feature Learning"}/>
      </div>
    </div>
  )
}

export default Blog