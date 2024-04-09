import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () =>{
   return(
     <header>

    <Navbar/>
    <div 
    className="flex header-main-container">
      <div className="my-leftHeader flex flex-column">
        <h1 className="font-bold">
      <strong className="text-light-blue"> Masters</strong> of quality and <strong className="text-light-blue">consistenecy</strong> 
        .</h1>

        <p className="normal-text-size text-light-greyish">
        Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </p>

        <span className="hero-btns">
          <button className="pxy-buttons bg-light-blue filter-btn button-border-opposite-more-curved text-white">
            Explore
            </button>
            <button className="pxy-buttons filter-btn button-border-opposite-more-curved text-light-blue border-blue-solid background-transparent">
              Contact Us
            </button>
        </span>

      <div className="flex justify-between">
     
      <div>

        <span>
          <img className="absolute" src="/img/Ellipse 739.png" alt="" />
          <h3 className="relative w-50">
            25,356
          </h3>

          </span>
          <p className="text-light-greyish w-50">
            projects done
          </p>

        
          </div>

          <div>
            <span>
            <img src="/img/Ellipse 740.png" className="absolute" alt="" />
          <h3 className="relative w-50">
            15,200
          </h3>
          </span>
          <p className="text-light-greyish w-50">
            Buildings Done
          </p>

          </div>


          <div>
          
          <span>
          <img src="/img/Ellipse 739.png" className="absolute" alt="" />
            <h3 className="relative w-50">350+</h3>
          </span>
          <p className="text-light-greyish w-50">
            Total Employees
          </p>
        </div>
      </div>
        
      </div>
      <picture>
        <img src='/img/hero-image.png' alt="Image of a building"
        className="relative hero-image"/>
      </picture>
    </div>
     </header>
   );
}


export default Header;
