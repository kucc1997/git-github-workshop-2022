import React from "react";

const UserCard = ({ participant }) => {
  return (
    <>
      <h2> {participant.name}</h2>
      <h2> {participant.department}</h2>
      <h2> {participant.bio}</h2>
    </>
  );
};

export default UserCard;
