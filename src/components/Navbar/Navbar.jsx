import React, { useCallback, useState } from "react";
import { FaXmark} from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";


const Navbar = () =>{
const [active, setActive] = useState('navbar-menu');

 
const showNavBar = () =>{
    setActive('navbar-menu showNavBar');
  }
  const removeNavBar = () =>{
    setActive('navbar-menu');
  }

  


    return(
  <nav className="z-10" style={{background: 'white'}}>

<div className='nav-wrapper'>
    <h3 className="text-light-blue uppercase font-semibold tracking-tighter">
    Construction
    </h3>
  
  <IoMdMenu
  className="menu-btn"
   style={{fontSize: '28px'}}
    onClick={showNavBar}/>

  
    <ul className={active} >
   
        <FaXmark className="close-btn" onClick={removeNavBar}/>
        
      <div className="menubtns-container">
        <li><a href="#Home" onClick={removeNavBar} className="leading-auto font-normal text-black">Home</a></li>
        <li><a href="#About" onClick={removeNavBar} className="leading-auto font-normal text-black">About</a></li>
        <li><a href="#Services" onClick={removeNavBar} className="leading-auto font-normal text-black">Services</a></li>
        <li><a href="#Project" onClick={removeNavBar} className="leading-auto font-normal text-black">Project</a></li>
        </div>
    </ul>
    </div>
  </nav>
    );
    }

export default Navbar;