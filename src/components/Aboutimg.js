import "./Aboutimgstyles.css";
import React from 'react'
import aboutimg from "../assets/IMG_ca0hpj (2).jpg";

const Aboutimg = () => {
  return (
    <div className = "about-me">

            <div className = "image-card">
                <img className = "image" src ={aboutimg} alt="aboutimg" />

                
                
            </div>
            
            <div className ="image-card">
            <p>My name is Mwendwa Bundi Emma. 
                    I gave my life to Christ in form 3
                     during a Weekend Challenge. Fast 
                     forward to my first year in campus and I was 
                    just as lukewarm as it can get. Then life happened, and He was there. Looking back, whatever happened did hurt 
                    and it broke 
                    me, but it was a blessing in disguise. It led me to Christ. He convicted me and said this to me.
                    "Mwendwa, you are neither hot nor cold, I want you to burn for me". Those words have stuck me with me ever since.
                    I have walked this journey and found Him in the highs and lows as well.

                    Audience of One is a project I have been working on and praying for since 2022 and here it is. 
                    It is my prayer that this corner of the internet will pour into and nourish you with His word.
                    I am but a vessel.
                    </p>
                
            </div>

        </div>
  )
}

export default Aboutimg