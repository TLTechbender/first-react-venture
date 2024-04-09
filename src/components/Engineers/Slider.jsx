import React from "react";
import { MdStar } from "react-icons/md";

import { BsThreeDotsVertical } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';




const Slider = () =>{
  return (

   
    <div className="slider-container mytop-80">
       <>
    <Swiper 
   modules={[Navigation]} 
    slidesPerView={1}
    spaceBetween={10}
       
    // // pagination = {
    // //   {
    // //     clickable: true
    // //   }
    // }


    className="mySwiper py-24px"
    navigation = {{
      nextEl : '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}

    breakpoints={{
      640:{
        slidesPerView: 2,
        spaceBetween: 20, 
      },

      868:{
        slidesPerView: 3,
        spaceBetween: 42, 
      }
    }}

    
    >
      <SwiperSlide>
      <div className="card">
            <span>
             <MdStar className="rating-star"/>
            <BsThreeDotsVertical className="dot-menu"/> 
            </span>
            <div>
                <img src="/img/Ellipse-752.png" alt="human picture" />
                <p className="font-medium text-base">Chris Evans</p>
                <p className="font-medium text-sm text-light-greyish">Michigan, TX</p>
                <p className="font-medium text-light-greyish text-base">989-653-2986</p>
                <p className="font-medium text-sm text-light-blue cursor-pointer">ChrisEvans@const.com</p>
            </div>
        
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="card">
            <span>
            <MdStar className="rating-star"/>
            <BsThreeDotsVertical className="dot-menu"/> 
            </span>
            <div>
                <img src="/img/Ellipse-753.png" alt="human picture" />
                <p className="font-medium text-base">Alison Kiara</p>
                <p className="font-medium text-sm text-light-greyish">Michigan, TX</p>
                <p className="font-medium text-light-greyish text-base">989-653-2986</p>
                <p className="font-medium text-sm text-light-blue cursor-pointer">ChrisEvans@const.com</p>
            </div>
        </div>
     
      </SwiperSlide>
      <SwiperSlide>
      <div className="card">
            <span>
            <MdStar className="rating-star"/>
            <BsThreeDotsVertical className="dot-menu"/> 
            </span>
            <div>
                <img src="/img/Ellipse-754.png" alt="human picture" />
                <p className="font-medium text-base">Chris Evans</p>
                <p className="font-medium text-sm text-light-greyish">Michigan, TX</p>
                <p className="font-medium text-light-greyish text-base">989-653-2986</p>
                <p className="font-medium text-sm text-light-blue cursor-pointer">ChrisEvans@const.com</p>
            </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
  </>
      
      <div className="button-arrangement my-16px">
        <div className="button-swiper">
          <div className="swiper-button-prev">

          </div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
        




      
    </div>
  );
};

export default Slider;