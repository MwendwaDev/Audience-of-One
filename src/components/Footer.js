import "./Footerstyles.css";
import React from 'react';
import { FaHome} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
         <div className="footer-container">
           <div className="left">
            <div className="location">
                <FaHome  size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </div>
            <p>Audience of One</p>
            <p>All Rights Reserved</p>
           </div>
           
           </div>
           

           
        </div>
    )
}



export default Footer;

