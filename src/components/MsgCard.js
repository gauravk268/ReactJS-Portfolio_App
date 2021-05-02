import React from "react";

function MsgCard({ name, email, msg }) {
  return (
    <div className="section-msgcard jumbotron p-4">
      <h2>Message from {name}</h2>
      <h4>Email: {email}</h4>
      <h4>Message: {msg}</h4>
    </div>
  );
}

export default MsgCard;
