import React from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Blogcard from "../components/Blogcard";


const Blogs = () => {
    return <div>
        <Navbar />
        
        <Heroimg2 heading="Audience of One Blog Resources." 
        text="#Doing Life for The Audience of One" />
        
        <Blogcard />

        <Footer />
        
     </div>
};




export default Blogs;






