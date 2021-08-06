import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./SocialFlow.css";

export default function SocialFlow() {
  return (
    <div>
      <p className="social-container">
        <a
          href="https://www.linkedin.com/in/jocavinashi/" target="_blank" rel="noreferrer"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="http://www.instagram.com/jocavinashi" target="_blank" rel="noreferrer"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com/jocavinashi" target="_blank" rel="noreferrer" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </p>
    </div>
  );
}
