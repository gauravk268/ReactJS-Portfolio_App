const Feedback = () => {
  return (
    <div className="feedback p-5" id="about">
      <div class="container">
        <div class="feedback headTitle">Feedback</div>
        <div class="feedback-wrapper">
          <form action="/feedback" method="post">
            <div class="feedback-element feedback-head">
              <div class="form-group">
                <label for="name">
                  <h4>Name</h4>
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter name"
                  required=""
                />
              </div>
              <div class="form-group">
                <label for="email">
                  <h4>Email address</h4>
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required=""
                />
                {/* <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
              </div>
            </div>

            <div class="feedback-element feedback-body">
              <div class="form-group">
                <label for="feedback">
                  <h4>Feedback</h4>
                </label>
                <textarea class="form-control" name="feedback"></textarea>
              </div>
              <button type="submit" class="btn btn-info">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
