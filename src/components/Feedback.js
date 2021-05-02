import React, { useState } from "react";
import db from "./Firebase/config";
import MsgCard from "./MsgCard";

const Feedback = () => {
  const [feedTemp, setFeedTemp] = useState({ name: "", email: "", msg: "" });
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedTemp.name === "" || feedTemp.email === "" || feedTemp.msg === "")
      return;

    setSaving(true);
    // console.log(feedTemp);

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

    setFeedTemp({ name: "", email: "", msg: "" });
    setSaving(false);
  };

  return (
    <div className="section-feedback p-5" id="about">
      <h1 className="feedback heading">Get in touch</h1>
      <div className="status">
        {sent &&
          (error === false ? (
            <small className="alert-success">
              Message saved successfully. Go to <a href="/">Home</a>{" "}
            </small>
          ) : (
            <small className="alert-danger">
              Cannot save message.
              <br /> Mail on{" "}
              <a href="mailto:gauravk26800@gmail.com">
                gauravk26800@gmail.com
              </a>{" "}
              or try again later.
              <br /> Sorry for the inconvenience.
            </small>
          ))}
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
              className="btn btn-primary my-2 w-100"
              disabled={saving}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
