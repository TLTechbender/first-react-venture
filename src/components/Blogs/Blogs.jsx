import React from "react";
const Blogs = () =>{
return(
    <section>
        <span className="heading flex flex-column gap-30">
            <h1 className="text-center text-black capitalize font-semibold leading-56px">Latest blogs</h1>
            <p className="text-center text-light-greyish leading-28px font-normal">Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
        </span>

        <div className="flex blogs-container my-24px">
          <picture className="blog-picture relative">
            <img src="/img/Img-2.png" alt="" />
            <span className="absolute flex flex-column gap-15">
              <h3 className="font-semibold text-white ">Unleash Your Creativity</h3>
              <p className="font-normal text-white">Nine for Mortal Men, doomed to die, One for</p>
              <button className="capitalize pxy-buttons button-border-opposite-more-curved text-white border-white-solid">
              read more
              </button>
            </span>
          </picture>

          <picture className="blog-picture relative">
            <img src="/img/Img-2.png" alt="" />
            <span className="absolute flex flex-column gap-15">
              <h3 className="font-semibold text-white">Unleash Your Creativity</h3>
              <p className="font-normal text-white" >Nine for Mortal Men, doomed to die, One for</p>
              <button className="capitalize pxy-buttons button-border-opposite-more-curved text-white border-white-solid">
              read more
              </button>
            </span>
          </picture>
        </div>
</section>
   );
}


export default Blogs;