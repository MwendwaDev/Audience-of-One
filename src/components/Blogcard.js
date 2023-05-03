import "./Blogcardstyles.css";
import React, { useState, useEffect } from "react";
import image1 from "../assets/claudio-testa--SO3JtE3gZo-unsplash.jpg";
import image2 from "../assets/henry-be-IicyiaPYGGI-unsplash.jpg";
import image3 from "../assets/henry-be-IicyiaPYGGI-unsplash.jpg";

import { request } from 'graphql-request';
const Blogcard = () => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
    const fetchBlogs = async () => {
        const { blogappsmwendwa } = await request(
            'master',
            `{
                blogappsmwendwa {
                    hereWeGoWithTheBlogapp
        
           loremIpsumLoremIpsum
                }
            }`
        );
        setBlogs(blogappsmwendwa);
    };
    fetchBlogs();
   }, []);



    return (
        <div className="work-container">
            <h1 className="project-heading">Tiles will go here</h1>
            <div className="project-container">
                <div className="project-card">
                
                    <img src={image1} alt="nature" />
                
                    
                   
                    <h2 className="project-title">When We Called for the Unfamiliar</h2>
                    <div className="pro-details">
                        {blogs.map((blogapp) => (
                    
                        
                        <p>{blogapp.loremIpsumLoremIpsum}</p>
                    ))}
                    
                    
                    <div>
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>




                <div className="project-card">
                    <img src={image2} alt="nature" />
                    <h2 className="project-title">Project tiltw</h2>
                    <div className="pro-details">
                        {blogs.map((blogapp) => (
                        <p>{blogapp.loremIpsumLoremIpsum}</p>
                    ))}
                    
                        <div>
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>





                <div className="project-card">
                    <img src={image3} alt="nature" />
                    <h2 className="project-title">Project tiltw</h2>
                    <div className="pro-details">
                        {blogs.map((blogapp) => (
                        <p>{blogapp.loremIpsumLoremIpsum}</p>
                    ))}
                    
                    <div>
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>


            



            
        </div>
        
            

                    
                   
    )
    }
            
                    
        

export default Blogcard;