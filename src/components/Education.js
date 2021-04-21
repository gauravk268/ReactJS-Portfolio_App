import React from "react";

const Education = () => {
  return (
    <div className="section-education">
      <div className="heading">Education</div>
      <hr />
      <div className="holder">
        <div className="edu-class">
          <h1 className="head">B. Tech.</h1>
          <div className="body">
            <a href="http://mnnit.ac.in" target="_blank" rel="noreferrer">
              <img
                className="edu-logo"
                src="/assets/images/mnnit.png"
                alt="MNNIT icon"
              />
            </a>
            <h2>MNNIT Allahabad, Prayagraj</h2>
            <h3>
              <strong>ECE: </strong> 7.25 (6th Sem)
            </h3>
          </div>
        </div>

        <div className="edu-class">
          <h1 className="head">Class XII</h1>
          <div className="body">
            <a
              href="https://www.navodaya.gov.in/nvs/nvs-school/SONBHADRA/en/home/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="edu-logo"
                src="/assets/images/jnv.jpeg"
                alt="JNV Icon"
              />
            </a>
            <h2>JNV Sonbhadra</h2>
            <h3>
              <strong>CBSE: </strong> 92.8%
            </h3>
          </div>
        </div>

        <div className="edu-class">
          <h1 className="head">Class X</h1>
          <div className="body">
            <a
              href="https://www.navodaya.gov.in/nvs/nvs-school/SONBHADRA/en/home/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="edu-logo"
                src="/assets/images/jnv.jpeg"
                alt="JNV Icon"
              />
            </a>
            <h2>JNV Sonbhadra</h2>
            <h3>
              <strong>CBSE: </strong> 91.2%
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
