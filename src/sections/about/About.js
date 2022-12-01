import React from 'react'
import './about.scss'
import {Feature} from '../../components'

const About = () => {
  return (
    <div className='deezi_about section_padding' id='about'>
      <div className='container section_padding'>
      

      <div className='heading'>
        <h1 className='gradient_text'>
          The Possibilities are Limitless
        </h1>
        <p>It's Frictionless</p>
      </div>

      <div className='features'>
        <div>
        <Feature title={"What is AI"} text={"Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving."}/>
        </div>
        <div>
        <Feature title={"What Is Machine Learning?"} text={"Machine learning is the concept that a computer program can learn and adapt to new data without human intervention. Machine learning is a field of artificial intelligence (AI) that keeps a computer’s built-in algorithms current regardless of changes in the worldwide economy."}/>
        </div>
        <div>
        <Feature title={"What is Deep Learning?"} text={"Deep Learning is a subfield of machine learning concerned with algorithms inspired by the structure and function of the brain called artificial neural networks. If you are just starting out in the field of deep learning or you had some experience with neural networks some time ago, you may be confused. I know I was confused initially and so were many of my colleagues and friends who learned and used neural networks in the 1990s and early 2000s"}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About