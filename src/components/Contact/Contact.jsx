import React from "react";

const Contact = () =>{
    return(
<section>
    <span className="heading flex flex-column gap-30">
        <h1 className="text-center  text-black leading-56px font-semibold">Contact Us</h1>
        <p className="text-center text-light-greyish text-sm leading-28px">
        Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </p>
    </span>

<div className="flex justify-between contact-container my-24px">
    <form className="flex flex-column gap-15" action="">


    <label className="text-light-greyish relative">
    <p className="absolute bg-white name-label">Name</p>
    <input className="px-24 py-12 outline-none w-100 name-input" type="text" name="name" />
  </label>

<label>
  <input className="px-24 py-12  bg-ligher-white outline-none border-none w-100 border-rounded-7px" type="text" name="email" placeholder="Email" />
  </label>

  <label>
  <input className="px-24 py-12 bg-ligher-white outline-none border-none w-100 border-rounded-7px" type="text" name="subject" placeholder="subject" />
  </label>

  {/* <label>
  <input type="textarea" name="message" rows="4" cols="50" placeholder = "Message" />
  </label> */}
  <textarea className=" py-12 px-24 bg-ligher-white outline-none border-none w-100 border-rounded-7px" name="Message" id="Message" rows="10" placeholder="Message" style={{resize:'none'}}>

  </textarea>

  <input className="pxy-buttons bg-light-blue button-border-opposite-more-curved text-white fit-content" type="submit" value="Submit" />
    </form>

    <picture>
      <img className=""  src="/img/Group-597.png" alt="" />
    </picture>
</div>
</section>
    ); 
}



export default Contact;