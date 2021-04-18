import React from "react";

function Courses(props) {
  return (
    <div className="p-5">
      <h1 className="heading">Courses</h1>
      <ul>
        <h3>
          <li>
            Machine Learning of Stanford University by Andrew Ng (Coursera)
          </li>
        </h3>
        <h3>
          <li>
            Deep Learning Specialization(5 Courses) by deeplearning.ai
            (Coursera)
          </li>
        </h3>
        <ol>
          <h4>
            <li>Neural Networks & Deep Learning</li>
            <li>Improving Deep Neural Networks</li>
            <li>Structuring Machine Learning Projects</li>
            <li>Convolutional Neural Networks</li>
            <li>Sequence Models</li>
          </h4>
        </ol>
      </ul>
    </div>
  );
}

export default Courses;
