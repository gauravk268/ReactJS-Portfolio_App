import React from "react";

const Error404 = (props) => {
  return (
    <div className="section-error-404 container-fluid text-center">
      <h1 className="style-error-mark">&#33;</h1>
      <h1>Error: 404</h1>
      <h1>Page not found</h1>
      <a className="btn btn-primary" href="/">
        <h3>Return to Homepage</h3>
      </a>
    </div>
  );
};

export default Error404;
