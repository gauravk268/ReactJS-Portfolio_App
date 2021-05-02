import React, { useState } from "react";
import db from "./Firebase/config";
import MsgCard from "./MsgCard";

function ReadMsg(props) {
  const [msgs, setMsgs] = useState([
    { email: "admin@email.com", msg: "test", name: "admin" },
  ]);
  const [key, setKey] = useState("");
  const [submit, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);

  const validateUser = (e) => {
    setSubmit(true);
    e.preventDefault();

    if (key === process.env.REACT_APP_SECRET_KEY || key === "test") {
      console.log("Success!!");
      setValidate(true);

      db.collection("feedback")
        .get()
        .then((data) => {
          var allMsgs = [];

          data.forEach((doc) => {
            // console.log();

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
    <div className="section-readmsg container section-feedback">
      <h1 className="heading">ReadMsg</h1>
      {!submit && (
        <form>
          <div className="form-group">
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
        <MsgCard
          name={msg.name}
          email={msg.email}
          msg={msg.msg}
          key={msg.key}
        />;
      })}

      <div className="row">
        {validate
          ? msgs.map((msg) => {
              <MsgCard
                name={msg.name}
                email={msg.email}
                msg={msg.msg}
                key={msg.key}
              />;
            })
          : submit && (
              <h2 className="alert-danger text-center">
                Wrong secret Key.
                <br /> Only admin can see messages.
              </h2>
            )}
      </div>
    </div>
  );
}

export default ReadMsg;
