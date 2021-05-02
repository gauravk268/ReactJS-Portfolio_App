import React from "react";

function MsgCard({ name, email, msg, time }) {
  return (
    <div className="section-msgcard col-lg-5 col-md-5 col-11">
      <h2>Message from {name}</h2>
      <h4>Email: {email}</h4>
      <h4>Message: {msg}</h4>
      <h4>Time: {time}</h4>
    </div>
  );
}

export default MsgCard;
