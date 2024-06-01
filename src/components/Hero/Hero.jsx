import React, { useEffect } from "react";
import "./Hero.css";
const Hero = ({}) => {
  return (
    <React.Fragment>
      <div className="heroContainer">
        <div className="hero">
          <div className="hero__title">
            <h1 className="hero__title--text">
              Hi! I'm <span className="">Abhiman Chauhan</span>,
            </h1>
            <span className="hero__subtitle--text">
              {" "}
              An <span className="hero__special--sub">IT Student</span>
            </span>
          </div>
          <div className="hero__quote">
            Crafting digital experiences that transcend the ordinary, where
            innovation meets elegance, and every line of code tells a story of
            creativity and precision. When it does not exist, design it.
          </div>
          {/* <div className='hero__bottom'>Wrote over 5000+ lines of code 🚀</div> */}
          <div className="current">
            <div className="country"></div>
            <div className="currentBuilding">
              Building{" "}
              <a
                target={"_blank"}
                href="https://voluble-parfait-773d88.netlify.app/"
              >
                ExpenseTracker
              </a>
            </div>
            <div className="currentAt">Software Engineer</div>
            <div className="currentWorking">
              Working on {"my latest project"}
              <div target={"_blank"} href="https://github.com/tanishqkrk/wool">
                {"{Splay Tree}"}
              </div>
            </div>
          </div>
          <a
            href="./resume.pdf"
            download={"./resume.pdf"}
            className="hero__resume--title"
          >
            Download Resume
          </a>
          <div className="heroLinks">
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/abhiman-chauhan-76169b226/"
              className="heroLinksLink"
            >
              Linkedin
            </a>
            <a
              target={"_blank"}
              href="https://github.com/tanishqkrk"
              className="heroLinksLink"
            >
              GitHub
            </a>
            <a
              target={"_blank"}
              href="https://www.instagram.com/_abhiman7/"
              className="heroLinksLink"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="heroImg">
          <div className="imgContainer">
            <img src="/headshot.jpg" alt="" className="heroImgImg" />
            <img src="/tanishqkrk-pixel.png" alt="" className="heroImgImg2" />
            <img src="/opt 1.svg" alt="" className="heroImgImg3" />
          </div>
        </div>
      </div>
      {/* <div className="bottom"></div> */}
    </React.Fragment>
  );
};

export default Hero;
