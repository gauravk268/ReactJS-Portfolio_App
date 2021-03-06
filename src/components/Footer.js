import React from "react";

function Footer(props) {
  return (
    <div className="section-footer text-center">
      <div className="wrapper container">
        <p className="display-8 py-2">Designed & Developed by Gaurav Kumar</p>
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
    </div>
  );
}

export default Footer;
