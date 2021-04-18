import React from "react";

const Education = () => {
  return (
    <div className="education p-5">
      <h1 className="education-child heading">Formal Education</h1>
      <div className="holder">
        <div className="holder-child education-card-1">
          <h2 className="edu-class-head">B. Tech.</h2>
          <div className="edu-class-body">
            <div className="edu-icon">
              <a href="http://mnnit.ac.in" target="_blank" rel="noreferrer">
                <img
                  className="edu-logo"
                  src="/assets/images/mnnit.png"
                  alt="MNNIT icon"
                />
              </a>
            </div>
            <div className="edu-data">
              <h3>Motilal Nehru National Institute of Technology Allahabad</h3>
              <h4>
                <strong>Electronics &amp; Communication :</strong> 7.25
                (Currently in 6th Semester)
              </h4>
            </div>
          </div>
        </div>

        <div className="holder-child education-card-2">
          <h2 className="edu-class-head">Class XII</h2>
          <div className="edu-class-body">
            <div className="edu-icon">
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
            </div>
            <div className="edu-data">
              <h3>Jawahar Navodaya Vidyalaya Sonbhadra</h3>
              <h4>
                <strong>CBSE :</strong> 92.8%
              </h4>
            </div>
          </div>
        </div>

        <div className="holder-child education-card-3">
          <h2 className="edu-class-head">Class X</h2>
          <div className="edu-class-body">
            <div className="edu-icon">
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
            </div>
            <div className="edu-data">
              <h3>Jawahar Navodaya Vidyalaya Sonbhadra</h3>
              <h4>
                <strong>CBSE :</strong> 91.2%
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
