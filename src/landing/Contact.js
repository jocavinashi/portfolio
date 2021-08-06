import React  from 'react';
import "./Menu.css";
import SocialFlow from "./SocialFlow";

const Contact=() => {
    return (
        <div class="contactpage">
                <h2 class="title">Contact Me</h2>
                <br/>
                <div class="contact">
                    <div class="email">
                        <h2>Email</h2>
                        <div class="okay">joshi.ujjwal65@gmail.com</div>
                    </div>
                    <div class="phone">
                        <h2>Phone</h2>
                        <div class="okay">9843284343</div>
                    </div>
                    <div class="address">
                        <h2>Address</h2>
                        <div class="okay">Baniyatar, Kathmandu</div>
                    </div>
                </div>
                <br/>
                <div class="sf"><SocialFlow/></div>
        </div>
    )
}
export default Contact