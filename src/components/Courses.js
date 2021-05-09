import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Courses(props) {
  return (
    <div className="section-courses" data-aos="fade-right">
      <div className="wrapper container">
        <h1 className="display-6">Courses</h1>
        <hr />
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOutLeft"
          duration="1"
        >
          <ul>
            <h3>
              <li className="h5 course main">
                Machine Learning of Stanford University by Andrew Ng (Coursera)
              </li>
            </h3>
            <h3>
              <li className="h5 course main">
                Deep Learning Specialization(5 Courses) by deeplearning.ai
                (Coursera)
              </li>
            </h3>
            <ol>
              <h4>
                <li className="h6 course desc">
                  Neural Networks & Deep Learning
                </li>
                <li className="h6 course desc">
                  Improving Deep Neural Networks
                </li>
                <li className="h6 course desc">
                  Structuring Machine Learning Projects
                </li>
                <li className="h6 course desc">
                  Convolutional Neural Networks
                </li>
                <li className="h6 course desc">Sequence Models</li>
              </h4>
            </ol>
          </ul>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Courses;
