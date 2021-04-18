import React from "react";

function Footer(props) {
  return (
    <div className="footer footer-dark p-5 text-center">
      <p>Designed & Developed by Gaurav Kumar</p>
      <div className="icons">
        <a
          className="footer-icon linkedin"
          href="https://www.linkedin.com/in/gauravk268"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="linkdedin logo"
            src="/assets/icons/icons8-linkedin-circled-50.png"
          />
        </a>

        <a
          className="footer-icon github"
          href="https://github.com/gauravk268"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github logo" src="/assets/icons/icons8-github-50.png" />
        </a>

        <a
          className="footer-icon twitter"
          href="https://twitter.com/gaurav_k268"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="twitter logo"
            src="/assets/icons/icons8-twitter-circled-50.png"
          />
        </a>

        <a
          className="footer-icon quora"
          href="https://quora.com/profile/Gaurav-1297"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="quora logo"
            src="/assets/icons/quora-icon-logo-by-Vexels.png"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
