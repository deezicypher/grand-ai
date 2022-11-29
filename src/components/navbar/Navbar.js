import React,{useState} from 'react';
import logo from '../../assets/img/zigi1.png';
import './navbar.scss';
import {HiOutlineMenu} from 'react-icons/hi';

const Menu = () => (
    <>
    <a href='#'><p>Home</p></a>
                <a href='#'><p>About</p></a>
                <a href='#'><p>AI</p></a>
                <a href='#'><p>Machine Learning</p></a>
                <a href='#'><p>Blog</p></a>
                <p>Sign In</p>
    </>
)

const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false)

  return (
    <div className='zigi_navbar'>
            <div className='logo'>
                    <img src={logo} alt='zigi' />
            </div>
        <div className='links'>
        
            <div className='navbar'>
                
                <Menu/>
              
            <div className='action'>
                
                <button type='button'>
                    <p>Sign Up</p>
                </button>
            </div>
            </div>
            <div className='menubar'>
                <HiOutlineMenu  fontSize={30} />
                {toggleMenu && (
            <></>
            )
}
    <div className='container scaleup-center'>
 
<Menu/>

    </div>
            </div>
           
            </div>  
  </div>
  )
}

export default Navbar