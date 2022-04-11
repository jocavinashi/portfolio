import React  from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";
import cv from '../assets/Uj.pdf';
import Three from "../3js/main"


const About=() => {
    return (
        <div class="aboutformat">  
            <h2 class="title">About Me</h2>
            <br/>
            <div class="row flex-v-align">
                <div class="col-sm-12 col-md-5 col-lg-5">
                    {/* <div class="home-photo"> */}
                        <Three/>
                        {/* <div class="hp-inner transition"><Three/></div> */}
                    {/* </div> */}
                </div>
                <div class="col-sm-12 col-md-7 col-lg-7">
                    <div class="home-text">  
                        <h3 class="about">Professionally connected with the web development industry and information technology for many years. Interested in the entire website spectrum and working on ambitious projects with positive people.</h3>
                        <div class="home-buttons">
                            <a href={cv} download><button class="bttn_a">Resume</button></a>
                            <button class="bttn_b" style={{"marginLeft":'30px'}}><Link to='/contact' style={{"text-decoration":"none",color:'black'}}>Contact</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About