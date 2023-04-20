import "./Blogcardstyles.css";
import React from "react";
import image1 from "../assets/claudio-testa--SO3JtE3gZo-unsplash.jpg";


const Blogcard = () => {
    return (
        <div className="blog-cards">
            <h1 className="blog-heading">My Presence will go with you</h1>
            <div className="blog-container">
                
                <div className="blog-img">
                    <img src={image1} alt="image1" />
                    <h2 className="blog-title">Blog title goes here</h2>
                    <div className="blog-details">
                        <p>Here is the blog
                        My Presence will go with yoMy Presence will go with yoMy Presence will go with yov
                        My Presence will go with yoMy Presence will go with yov
                        </p>
                        <div className="pro-btns">Read More</div>

                    </div>
                </div>
            </div>
        
        </div>
    )
}




export default Blogcard;