import React, { useState } from "react";
import db from "./config/firebaseConfig";

const Feedback = () => {
  const [feedTemp, setFeedTemp] = useState({
    name: "",
    email: "",
    msg: "",
    timestamp: Date().toString(),
  });
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedTemp.name === "" || feedTemp.email === "" || feedTemp.msg === "") {
      setError(true);
      return;
    }

    setSaving(true);

    db.collection("feedback")
      .add(feedTemp)
      .then((documentReference) => {
        setSent(true);
        setError(false);
        // console.log("document reference ID", documentReference.id);
      })
      .catch((error) => {
        setError(true);
        setSent(true);
        // console.log(error.message);
      });

    setFeedTemp({ name: "", email: "", msg: "", timestamp: "" });
    setSaving(false);
  };

  return (
    <div className="section-feedback" id="about">
      <div className="wrapper container">
        <h1 className="feedback display-4">Get in touch</h1>
        <div className="status">
          {sent ? (
            error === false ? (
              <div className="alert alert-success">
                Message saved successfully. Go to <a href="/">Home</a>{" "}
              </div>
            ) : (
              <div className="alert alert-danger">
                Cannot save message.
                <br /> Mail on{" "}
                <a href="mailto:gauravk26800@gmail.com">
                  gauravk26800@gmail.com
                </a>{" "}
                or try again later.
                <br /> Sorry for the inconvenience.
              </div>
            )
          ) : (
            error === true && (
              <div className="alert alert-warning">
                Fill all fields before sending message.
              </div>
            )
          )}
        </div>
        <hr />
        <div className="feedback-wrapper">
          <form>
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
                  value={feedTemp.name}
                  onChange={(e) => {
                    setFeedTemp({ ...feedTemp, name: e.target.value });
                  }}
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
                  value={feedTemp.email}
                  onChange={(e) => {
                    setFeedTemp({ ...feedTemp, email: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="feedback-element feedback-body">
              <div className="form-group">
                <label for="feedback">
                  <h3>Message</h3>
                </label>
                <textarea
                  className="form-control"
                  name="feedback"
                  value={feedTemp.msg}
                  placeholder="Your message here"
                  onChange={(e) => {
                    setFeedTemp({ ...feedTemp, msg: e.target.value });
                  }}
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="btn btn-primary my-2"
                disabled={saving}
              >
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
