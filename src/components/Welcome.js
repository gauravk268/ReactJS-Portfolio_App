import { profile } from "../images";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-child profile-img">
        <img src={profile} alt="profile" />
      </div>
      <div className="welcome-child welcome-txt display-2">Hello Folks!</div>
    </div>
  );
};

export default Welcome;
