import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";
import cv from '../assets/Uj.pdf';
import Three from "../3js/main"
import Typed from "react-typed";


const About=() => {
    const [sphere, setSphere] = useState("globe");
    const handleSphere=(event)=>{
        setSphere(event.target.value);
    }

    return (
        <div class="aboutformat">  
            <h2 class="title">About Me</h2>
            <div class="aboutcontainer">
                <div style={{display:'flex',flexDirection:'column',flex:'1'}}>
                    <button className={`bttn ${sphere==="mars"?"actives":""}`} value="mars" onClick={handleSphere}>Mars</button>
                    <button className={`bttn ${sphere==="globe"?"actives":""}`} value="globe" onClick={handleSphere}>Earth</button>
                    <button className={`bttn ${sphere==="moon"?"actives":""}`} value="moon" onClick={handleSphere}>Moon</button>
                </div>
                <div style={{flex:'4'}}><Three img={`${sphere}`}/></div>
                <div style={{display:'flex',flexDirection:'column',flex:'1'}}>
                    <button className="bttn" ><a href={cv} download style={{"text-decoration":"none",color:'black'}}>Resume</a></button>
                    <button className="bttn" ><Link to='/contact' style={{"text-decoration":"none",color:'black'}}>Contact</Link></button>
                </div>
            </div>
            <div><Typed className="typed-text"
                 strings={["Creative.","","Curious.","","Conscious.",""]}
                 typeSpeed={40}
                 backSpeed={40}
                 loop
                 />
            </div>
        </div>
    )
}
export default About