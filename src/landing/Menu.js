import React  from 'react';
import "./Menu.css";
import Typed from "react-typed";

const Menu=() => {
    const handleMenu = () => {
        const container = document.querySelector(".containers");
        container.classList.toggle("active");
        };
    return (
        <div class="inner" >
        <h2 class="title">Ujjwal Joshi</h2>
                <p><Typed className="typed-text"
                 strings={["Developer.","","Designer.",""]}
                 typeSpeed={40}
                 backSpeed={40}
                 loop
                 /></p>
                <button class="bttn" onClick={handleMenu} >Read more</button>
        </div>
    )
}
export default Menu
