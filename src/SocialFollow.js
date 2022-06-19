import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faTwitter,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3 className = "heading">Created by Wilbert Verayin</h3>
        <a href="https://www.linkedin.com/in/wilbertverayin/"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/wilbertverayin" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/wilbertverayin" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
    </div>
  );
}