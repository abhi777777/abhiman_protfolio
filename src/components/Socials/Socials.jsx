import React from "react";

import SocialsLink from "./SocialsLink/SocialsLink";
import "./SocialsLink/SocialsLink.css";
import "./Socials.css";
const Socials = () => {
  return (
    <div className="socials">
      <div className="socials__links">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzChLXqfGxrrcrLJWcjGLqDZrvlLxpQhjSfBHSMqrDppWLmmnfcxzbBZFZgFTNqNKJdFhbKZwKKKfNq"
          className="socials__links--mail"
        >
          tanishqkrk@gmail.com
        </a>
      </div>
      <div className="socials__line"></div>
    </div>
  );
};

export default Socials;
