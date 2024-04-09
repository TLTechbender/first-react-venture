import React from "react";
import Header from "./components/Header/Header";
import Logos  from "./components/Logos/Logos";
import Reasons from "./components/Reasons/Reasons";
import Engineers from "./components/Engineers/Engineer";
import Message from "./components/Message/Message";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

const App = () => {
    return(
        <div className="max-w-1440px mx-auto ">
       <Header/>
       <Logos/>
       <Reasons/>
       <Engineers/>
       <Message/>
       <Contact/>
       <Blogs/>
       <Subscribe/>
       <Footer/>
        </div>
    )
}

export default App;