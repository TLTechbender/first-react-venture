import React from "react";


const Reasons = () =>{

    return(
    <section>
<div className="grid reasons-container">
<div className="flex flex-column gap-15">
<p className="text-light-greyish leading-28px normal-text-size font-normal">
Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
</p>
<span>
    <button className="pxy-buttons bg-light-blue button-border-opposite-more-curved text-white capitalize font-medium leading-20px">
explore
        </button>
       
</span>

</div>

<h1 className="text-black font-medium leading-120">
    why choose us for best construction experience
</h1>
<picture>
<img src="../public/img/high-rise-construction.png" alt="" />
</picture>

<div className="flex flex-column justify-between gap-20px">
<span className="flex gap-15">
    <span className="flex flex-70 relative justify-end align-end max-w-80px max-h-120px">
        <img className="absolute bottom-0 left-0 rectangle-image" src="../public/img/Rectangle-4304.png" alt="" />
    <h1 className="z-10 relative bottom-30px font-semibold leading-100">01</h1>
    </span>
       <p className="font-normal normal-text-size text-light-greyish">And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
    </span>


    <span className="flex gap-15">
    <span className="flex flex-70 relative justify-end align-end max-w-80px max-h-120px">
            <img className="absolute bottom-0 left-0 rectangle-image"  src="../public/img/Rectangle-4305.png" alt="" />
        <h1 className="z-10 relative bottom-30px font-semibold leading-100">02</h1>
        </span>
       <p className="font-normal normal-text-size text-light-greyish">Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.</p>   
    </span>
    
    <span className="flex gap-15">
    <span className="flex flex-70 relative justify-end align-end max-w-80px max-h-120px">
            <img className="absolute bottom-0 left-0 rectangle-image" src="../public/img/Rectangle-4306.png" alt="" />
        <h1 className="z-10 relative bottom-30px font-semibold leading-100">03</h1>
        </span>
       <p className="font-normal normal-text-size text-light-greyish">Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
    </span>
</div>
</div>

    </section>
    );
}


export default Reasons;