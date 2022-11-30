import React from 'react'
import './app.scss';
import {Article,Brand,CTA,Feature,Navbar} from './components';
import {About,Blog,Features,Footer,Header,Potential,} from './sections';

const App = () => {
  return (
    <div>
      <div className="header">
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <About/>
      <Features/>
      <Potential/>
      <CTA/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App
