import React from "react";
import { FaGithub, FaTwitter, FaInstagram,  FaArrowAltCircleRight } from "react-icons/fa";
const Footer = () =>{
    return(
   <footer className="my-48px">

    <div className="grid footer-container">
    <div>
        <h3 className="capitalize font-semibold text-light-blue tracking-tighter">
    construction
        </h3>
        <p className="leading-28px text-sm ">
You'll find the next home value you prefer
        </p>

        <span className="flex gap-15 text-light-blue">
        <FaGithub/> 
        <FaTwitter/>   
        <FaInstagram/>
        </span>
    </div>
    <ul>
       <p className="text-black font-semibold">Resources</p> 
        <li className="text-sm text-lighter-grey font-normal">Our Agents</li>
        <li className="text-sm text-lighter-grey font-normal">Member Stories</li>
        <li className="text-sm text-lighter-grey font-normal">Video</li>
        <li className="text-sm text-lighter-grey font-normal">Free Trial</li>
    </ul>

<ul>
<p className="text-black font-semibold">Company</p> 

    <li className="text-sm text-lighter-grey font-normal">Partnership</li>
    <li className="text-sm text-lighter-grey font-normal">Terms of Use</li>
    <li className="text-sm text-lighter-grey font-normal">Privacy</li>
    <li className="text-sm text-lighter-grey font-normal">Sitemap</li>
</ul>
    <div>
        <h1></h1>

        <form  className="flex flex-column gap-15" action="">

        
            <p className="font-semibold capitalize">get in touch</p>
            <label className="relative">
                <input className="px-24 relative py-12 bg-ligher-white outline-none border-none" type="text" placeholder="Enter your mail" />
                 <FaArrowAltCircleRight className="absolute arrow-btn text-light-blue"/>
            </label>
        </form>
    </div>

   
    </div>
    <p className="text-center mytop-36 font-medium" style={{color:'rgba(194, 194, 194, 1)'}}>
    Copyright construction.com, All rights reserved.
    </p>
   </footer>
    );
}


export default Footer;