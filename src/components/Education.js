import React from "react";

const Education = () => {
  return (
    <div className="section-education">
      <div className="heading">Formal Education</div>
      <hr />
      <div className="edu-holder">
        <div className="edu-class edu-3">
          <div className="edu-class-head">
            <h2>B. Tech.</h2>
          </div>
          <div className="edu-class-body">
            <a href="http://mnnit.ac.in" target="_blank" rel="noreferrer">
              <img
                className="edu-logo"
                src="/assets/images/mnnit.png"
                alt="MNNIT icon"
              />
            </a>
            <h3>MNNIT Allahabad, Prayagraj</h3>
            <h4>
              <strong>ECE: </strong> 7.25 (6th Sem)
            </h4>
          </div>
        </div>

        <div className="edu-class edu-2">
          <div className="edu-class-head">
            <h2>Class XII</h2>
          </div>
          <div className="edu-class-body">
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
            <h3>JNV Sonbhadra</h3>
            <h4>
              <strong>CBSE: </strong> 92.8%
            </h4>
          </div>
        </div>

        <div className="edu-class edu-1">
          <div className="edu-class-head">
            <h2>Class X</h2>
          </div>
          <div className="edu-class-body">
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
            <h3>JNV Sonbhadra</h3>
            <h4>
              <strong>CBSE: </strong> 91.2%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
