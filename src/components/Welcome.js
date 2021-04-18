import React from "react";

const Welcome = () => {
  return (
    <div className="welcome text-center">
      <div className="welcome-child profile-img">
        <img src="/assets/images/profile.jpg" alt="profile" />
      </div>
      <div className="welcome-child welcome-txt display-2">Hello Folks!</div>
    </div>
  );
};

export default Welcome;
