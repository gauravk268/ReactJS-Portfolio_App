import React from "react";

function MsgCard({ name, email, msg, time }) {
  return (
    <section className="msgcard col-lg-5 col-md-5 col-12 p-1 m-1">
      <div className="card flex-fill">
        <p className="card-title text-center h4 p-2">Message from {name}</p>
        <div className="card-body">
          <p className="card-text">
            <strong>Email:</strong> {email}
          </p>
          <p className="card-text">
            <strong>Message:</strong> {msg}
          </p>
          <p className="card-text">
            <strong>Time:</strong> {time}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MsgCard;
