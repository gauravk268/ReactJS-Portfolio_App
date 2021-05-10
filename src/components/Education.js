import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Education = () => {
  return (
    <div className="section-education animate__animated animate__slideInLeft">
      <div className="wrapper container">
        <div className="display-6">Education</div>
        <hr />
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOut="fadeOutRight"
          duration="1"
        >
          <div className="row text-center">
            <div className="col-lg-4 col-md-4 col-sm-9 mb-2 d-flex mx-auto">
              <div className="card pt-1 flex-fill">
                <a href="http://mnnit.ac.in" target="_blank" rel="noreferrer">
                  <img
                    className="card-img-top"
                    src="/assets/images/mnnit.png"
                    alt="MNNIT icon"
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title text-left">B. Tech.</h4>
                  <p className="card-text">MNNIT Allahabad, Prayagraj</p>
                  <p className="card-text">
                    <strong>ECE: </strong> 7.25 (6th Sem)
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-9 mb-2 d-flex mx-auto">
              <div className="card pt-1 flex-fill">
                <a
                  href="https://www.navodaya.gov.in/nvs/nvs-school/SONBHADRA/en/home/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/assets/images/jnv.jpeg"
                    alt="JNV Icon"
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">Intermediate</h4>
                  <p className="card-text">JNV Sonbhadra</p>
                  <p className="card-text">
                    <strong>CBSE: </strong> 92.8%
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-9 mb-2 d-flex mx-auto">
              <div className="card pt-1 flex-fill">
                <a
                  href="https://www.navodaya.gov.in/nvs/nvs-school/SONBHADRA/en/home/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-img-top"
                    src="/assets/images/jnv.jpeg"
                    alt="JNV Icon"
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">High School</h4>
                  <p className="card-text">JNV Sonbhadra</p>
                  <p className="card-text">
                    <strong>CBSE: </strong> 91.2%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Education;
