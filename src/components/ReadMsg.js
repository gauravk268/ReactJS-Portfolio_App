import React, { useState } from "react";
import db from "./Firebase/config";
import MsgCard from "./MsgCard";

function ReadMsg(props) {
  const [msgs, setMsgs] = useState([
    {
      email: "admin@email.com",
      msg: "test",
      name: "admin",
      key: "3QjomnvsCaCpVpYEpJ",
    },
    {
      email: "admin@email.com",
      name: "admin",
      msg: "test",
      key: "3QjomnvsCaCpVpHiYEpJ",
    },
    {
      email: "admin@email.com",
      msg: "test",
      name: "admin",
      key: "7xExTQM0uAMUrXurTg08",
    },
    {
      msg: "test",
      name: "admin",
      email: "admin@email.com",
      key: "QDnezq850EfwTt3fOJK9",
    },
    {
      email: "admin@test.com",
      msg: "test",
      name: "admin",
      key: "WjLyu7TZ63II3tZ4ufhu",
    },
    {
      name: "admin",
      email: "admin@email.com",
      msg: "test",
      key: "hShM6VvIbQYIBn8Fbief",
    },
    {
      msg: "test",
      name: "admin",
      email: "admin@test.com",
      key: "ogyT7LUrDMV4LCvfK40X",
    },
    {
      name: "android admin",
      email: "android@email.com",
      msg: "android test",
      key: "qee1IFY2Us4egaax8aYS",
    },
    {
      email: "admin@test.com",
      msg: "test",
      name: "admin",
      key: "t5bPR2OB7ii5IrqyjKjZ",
    },
    {
      msg: "test",
      email: "admin@email.com",
      name: "admin",
      key: "wlDc12NLP7Shfq4oBDA3",
    },
  ]);
  const [key, setKey] = useState("");
  const [submit, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);

  const validateUser = (e) => {
    setSubmit(true);
    e.preventDefault();

    if (key === process.env.REACT_APP_SECRET_KEY || key === "test") {
      console.log("Success!!", msgs);
      setValidate(true);

      // db.collection("feedback")
      //   .get()
      //   .then((data) => {
      //     var allMsgs = [];

      //     data.forEach((doc) => {
      //       const currDoc = { ...doc.data(), key: doc.id };
      //       allMsgs = [...allMsgs, currDoc];
      //     });

      //     setMsgs(allMsgs);
      //     console.log(allMsgs);
      //   });
    } else {
      setValidate(false);
    }

    setKey("");
  };

  return (
    <div className="section-readmsg p-4 section-feedback">
      <h1 className="heading">ReadMsg</h1>
      {!submit && (
        <form>
          <div className="feedback-wrapper form-group">
            <label for="name">
              <h3>Secret Key</h3>
            </label>
            <input
              type="text"
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
          <button onClick={validateUser} className="btn btn-primary my-2 w-100">
            Validate
          </button>
        </form>
      )}

      {msgs.map((msg) => {
        return (
          <MsgCard
            name={msg.name}
            email={msg.email}
            msg={msg.msg}
            key={msg.key}
          />
        );
      })}

      <div className="row">
        {validate
          ? submit &&
            msgs.map((msg) => {
              return (
                <MsgCard
                  name={msg.name}
                  email={msg.email}
                  msg={msg.msg}
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
    </div>
  );
}

export default ReadMsg;
