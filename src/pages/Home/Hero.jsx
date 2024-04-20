import React from 'react';
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
    <div className='sub-sub-hero'>
    <h1 align='center'> DIFFICULTY LEVELS </h1>
    <div className="one-content">
                        <h2> 1.</h2>
                        <p>  Accept camera access & wait for the webcam to load</p>
                    </div>
                    <br></br>
                    <br></br>



    </div>










    <div className='sub-hero'>
    <h1 align='center'> INSTRUCTIONS </h1>
    <br></br>
    <div class="content-container">
                    <div className="one-content">
                        <h2> 1.</h2>
                        <p>  Accept camera access & wait for the webcam to load</p>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="two-content">
                        <h2> 2. </h2>
                        <p>  Select the pose you want to perform & read the instruction of that particular pose </p>
                    </div>
                    <br></br>
                    <br></br>
                  
                    <div className="three-content">
                        <h2> 3. </h2>
                        <p> Perform the same pose as in the image, When the pose matches the skeleton overlay on the video will turn green, and a sound will play.</p>
                    </div>
                    <br></br>
                    <br></br>
</div>
</div>
<div className="hero_btns">
                        <Link to ="/start">
                        <button className="start-btn" >
                            Get Started
                        </button>
                        </Link>
</div>
    </div>
  );
}

export default Hero;
