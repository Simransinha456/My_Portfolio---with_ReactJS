import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assests/Me.jpeg'

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Simran Sinha" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h3>Experience</h3>
              <small>1.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h3>Projects</h3>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            1+ years experienced Front End Developer with hands-on experience included 6+ months in backend and
            identifying web-based user interactions along with designing and
            implementing highly-responsive user interface components by
            deploying React concepts. Proficient in translating designs and
            wireframes into high-quality code, and writing application interface
            code via JavaScript and React JS workflows. Adept at monitoring and
            maintaining frontend performance and troubleshooting and debugging
            the same to bolster overall performance.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
