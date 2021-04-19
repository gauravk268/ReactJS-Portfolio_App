import React from "react";

function Courses(props) {
  return (
    <div className="courses p-5">
      <h1 className="heading">Courses</h1>
      <ul>
        <h3>
          <li className="course main">
            Machine Learning of Stanford University by Andrew Ng (Coursera)
          </li>
        </h3>
        <h3>
          <li className="course main">
            Deep Learning Specialization(5 Courses) by deeplearning.ai
            (Coursera)
          </li>
        </h3>
        <ol>
          <h4>
            <li className="course desc">Neural Networks & Deep Learning</li>
            <li className="course desc">Improving Deep Neural Networks</li>
            <li className="course desc">
              Structuring Machine Learning Projects
            </li>
            <li className="course desc">Convolutional Neural Networks</li>
            <li className="course desc">Sequence Models</li>
          </h4>
        </ol>
      </ul>
    </div>
  );
}

export default Courses;
