import React ,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Menu from "./landing/Menu.js";
import Particles from 'react-particles-js';
import Typed from "react-typed";
import "./landing/Menu.css"
import About from "./landing/About.js";
import Contact from "./landing/Contact.js";
import Projects from "./landing/Projects.js";
import SocialFlow from "./landing/SocialFlow.js";
export default function Routes(){
    useEffect(() => {
        const hamburger_menu = document.querySelector(".hamburger-menu");
        const container = document.querySelector(".containers");
        hamburger_menu.addEventListener("click", () => {
            container.classList.toggle("active");
            });
      });
      const handleMenu = () => {
        const hamburger_menu = document.querySelector(".hamburger-menu");
        const container = document.querySelector(".containers");
        container.classList.toggle("active");
        };
    return(
        <BrowserRouter>
        <Switch>
        <div className="containers container-fluid">
      <div className="navbar">
        <div className="menu">
          <h3 class="logo">Port<span>folio</span></h3>
          <div class="hamburger-menu">
            <div class="bar"></div>
          </div>
        </div>
      </div>

      <div class="main-container">
        <div class="main">
          <header class="abcd">
          <Particles
        params={{
            fpsLimit: 60,
            particles: {
                number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 1000,
                }
                },
                line_linked: {
                    shadow: {
                        enable: true,
                        color: "#00ff00",
                        blur: 1
                    }
                },
                collisions: {
                    enable: true,
                },
                size: {
                    value: 7,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3
                    }
                },
                shape: {
                    type: "circle",
                },
                move: {
                    speed: 1
                },
                opacity: {
                    value: 0.5,
                    anim: {
                        enable: true
                    }
                },
                detectRetina: true,
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                
                },
            },
        }}
      />
      <div class="overlay">
            <Route exact path="/" component={Menu} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
            </div>
          </header>
        </div>

        <div class="shadow one"></div>
        <div class="shadow two"></div>
      </div>

      <div class="links">
        <ul>
          <li>
          <a  className="m1" onClick={handleMenu}><Link to='/'>Menu</Link></a>
          </li>
          <li>
          <a  className="m2" onClick={handleMenu}><Link to='/about'>About Me</Link></a>
          </li>
          <li>
          <a  className="m3" onClick={handleMenu}><Link to='/projects'>Projects</Link></a>
          </li>
          <li>
          <a  className="m4" onClick={handleMenu}><Link to='/contact'>Contact</Link></a>
          </li>
        </ul>
      </div>
    </div>
        </Switch>
        </BrowserRouter>
        
    )
}