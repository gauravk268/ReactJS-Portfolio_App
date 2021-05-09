import React, { useState } from "react";
import db from "./config/firebaseConfig";
import MsgCard from "./MsgCard";

function ReadMsg(props) {
  const [msgs, setMsgs] = useState([]);
  const [key, setKey] = useState("");
  const [submit, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);

  const validateUser = (e) => {
    setSubmit(true);
    e.preventDefault();

    if (key === process.env.REACT_APP_SECRET_KEY) {
      console.log("Success!!");
      setValidate(true);

      db.collection("feedback")
        .get()
        .then((data) => {
          var allMsgs = [];

          data.forEach((doc) => {
            const currDoc = { ...doc.data(), key: doc.id };
            allMsgs = [...allMsgs, currDoc];
          });

          setMsgs(allMsgs);
        });
    } else {
      setValidate(false);
    }

    setKey("");
  };

  return (
    <div className="section-readmsg section-feedback p-5">
      <div className="wrapper container">
        <h1 className="heading">ReadMsg</h1>
        <hr />
        {!submit && (
          <form>
            <div className="feedback-wrapper form-group">
              <label for="name">
                <h3>Secret Key</h3>
              </label>
              <input
                type="password"
                className="form-control"
                name="name"
                placeholder="Enter Secret Key to see Messages"
                required=""
                value={key}
                onChange={(e) => {
                  setKey(e.target.value);
                }}
              />
            </div>
            <button onClick={validateUser} className="btn btn-primary my-2">
              Validate
            </button>
          </form>
        )}

        <div className="row">
          {validate
            ? submit &&
              msgs.map((msg) => {
                return (
                  <MsgCard
                    name={msg.name}
                    email={msg.email}
                    msg={msg.msg}
                    time={msg.timestamp}
                    key={msg.key}
                  />
                );
              })
            : submit && (
                <div>
                  <div className="alert alert-danger text-center">
                    Wrong secret Key.
                    <br /> Only admin can see messages.
                  </div>
                  <a className="btn btn-info" href="/">
                    Go to Home
                  </a>
                </div>
              )}
        </div>

        {validate && msgs.length === 0 && (
          <h2 className="alert alert-info">No messages until now.</h2>
        )}
      </div>
    </div>
  );
}

export default ReadMsg;
