import React from "react";

function Footer(props) {
  return (
    <div className="footer footer-dark text-center">
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
          <img alt="linkdedin logo" src="/assets/icons/linkedin.svg" />
        </a>

        <a
          className="footer-icon github"
          href="https://github.com/gauravk268"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github logo" src="/assets/icons/github.svg" />
        </a>

        <a
          className="footer-icon twitter"
          href="https://twitter.com/gaurav_k268"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter logo" src="/assets/icons/twitter.svg" />
        </a>

        <a
          className="footer-icon youtube"
          href="https://www.youtube.com/channel/UCIYgr_6qLgtq-qc02-pUYmw"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="youtube logo" src="/assets/icons/youtube.svg" />
        </a>

        <a
          className="footer-icon quora"
          href="https://quora.com/profile/Gaurav-1297"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="quora logo" src="/assets/icons/quora.svg" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
