import React from "react";

const Education = () => {
  return (
    <div className="section-education">
      <h1 className="education-child heading">Formal Education</h1>
      <div className="holder row">
        <div className="project-card col-lg-4 col-md-6 col-12 mb-5 d-flex">
          <div className="card flex-fill">
            <a href="https://www.mnnit.ac.in" target="_blank" rel="noreferrer">
              <img
                className="card-img-top p-4"
                src="/assets/images/mnnit.png"
                alt="Card cap"
              />
            </a>
            <div className="card-body">
              <h3 className="card-title">B. Tech.</h3>
              <h4 className="project-card card-title">
                Motilal Nehru National Institute of Technology Allahabad
              </h4>
              <p className="project-card card-text">
                <strong>Electronics &amp; Communication :</strong> 7.25
                (Currently in 6th Semester)
              </p>
            </div>
          </div>
        </div>

        <div className="project-card col-lg-4 col-md-6 col-12 mb-5 d-flex">
          <div className="card flex-fill">
            <a
              href="https://www.navodaya.gov.in/nvs/nvs-school/SONBHADRA/en/home/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="card-img-top p-4"
                src="/assets/images/jnv.jpeg"
                alt="Card cap"
              />
            </a>
            <div className="card-body">
              <h3 className="card-title">Class XII</h3>
              <h4 className="project-card card-title">
                Jawahar Navodaya Vidyalaya Sonbhadra
              </h4>
              <p className="project-card card-text">
                <strong>CBSE :</strong> 92.8%
              </p>
            </div>
          </div>
        </div>

        <div className="project-card col-lg-4 col-md-6 col-12 mb-5 d-flex">
          <div className="card flex-fill">
            <a
              href="https://www.navodaya.gov.in/nvs/nvs-school/SONBHADRA/en/home/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="card-img-top p-4"
                src="/assets/images/jnv.jpeg"
                alt="Card cap"
              />
            </a>
            <div className="card-body">
              <h3 className="card-title">Class X</h3>
              <h4 className="project-card card-title">
                Jawahar Navodaya Vidyalaya Sonbhadra
              </h4>
              <p className="project-card card-text">
                <strong>CBSE :</strong> 91.2%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
