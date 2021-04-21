const About = () => {
  return (
    <div className="section-about text-center" id="about">
      <div className="wrapper">
        <div className="about desc p-5">
          <h1 className="heading h1">Hey, I'm Gaurav</h1>
          <h5 className="display-6">
            A web developer from MNNIT Allahabad in the India. I love to create
            websites and always eager to learn new things.
          </h5>
          <a className="btn btn-info" href="projects">
            My Projects
          </a>
        </div>
        <img className="avatar" src="/assets/images/profile-orig.png" />
      </div>
      <img
        className="curve-bottom"
        src="/assets/illustrations/curve-top-white.svg"
      />
    </div>
  );
};

export default About;
