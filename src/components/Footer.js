import React from "react";

function Footer(props) {
  return (
    <div className="footer footer-dark text-center" id="contact">
      <img
        className="curve-site-footer"
        src="/assets/illustrations/curve-bottom-white.svg"
        alt="footer curve"
      />
      <h4>Designed & Developed by Gaurav Kumar</h4>
      <div className="icons px-5">
        <a
          className="footer-icon linkedin"
          href="https://www.linkedin.com/in/gauravk268"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkdedin logo" src="/assets/icons/linkedin1.svg" />
        </a>

        <a
          className="footer-icon github"
          href="https://github.com/gauravk268"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github logo" src="/assets/icons/github1.svg" />
        </a>

        <a
          className="footer-icon twitter"
          href="https://twitter.com/gaurav_k268"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter logo" src="/assets/icons/twitter1.svg" />
        </a>
        <a
          className="footer-icon quora"
          href="https://quora.com/profile/Gaurav-1297"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="quora logo" src="/assets/icons/quora1.svg" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
