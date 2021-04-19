const Feedback = () => {
  return (
    <div className="section-feedback p-5" id="about">
      <h1 className="feedback heading">Feedback</h1>
      <div className="feedback-wrapper">
        <form action="/feedback" method="post">
          <div className="feedback-element feedback-head">
            <div className="form-group">
              <label for="name">
                <h3>Name</h3>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter name"
                required=""
              />
            </div>
            <div className="form-group">
              <label for="email">
                <h3>Email address</h3>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required=""
              />
              {/* <!-- <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
            </div>
          </div>

          <div className="feedback-element feedback-body">
            <div className="form-group">
              <label for="feedback">
                <h3>Feedback</h3>
              </label>
              <textarea className="form-control" name="feedback"></textarea>
            </div>
            <button type="submit" className="btn btn-info my-2 w-100">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
