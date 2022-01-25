import React from "react";
import "../css/UserCard.css";

const UserCard = ({ participant }) => {
  return (
    <div className="card">
      <div className="card-title">{participant.name}</div>
      <div className="card-body">
        <p>📝 {participant.faculty}</p>
        <p>📅 Batch of {participant.batch}</p>
        <p>✏️ {participant.bio}</p>
        <p>📧 {participant.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
