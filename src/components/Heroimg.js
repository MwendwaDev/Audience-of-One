import "./Heroimgstyles.css"
import React from "react";
import oneimg from "../assets/henry-be-IicyiaPYGGI-unsplash.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={oneimg} alt="imageone" />
            </div>
            <div className="content">
                <p>Doing life for the Audience of One</p>
                <h1>The Audience of One</h1>
                <div>
                    <Link to="/about" className="btn">About

                    </Link>
                    <Link to="/blogs" className="btn"> Blogs

                    </Link>
             
                
                
                </div>
            </div>
            
        </div>
    )
}





export default Heroimg;
