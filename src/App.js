import React from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Participants from "./data/participants.json";

const App = () => {
  return (
    <div>
      <Header />

      {Participants.map((participant) => {
        return <UserCard participant={participant} key={participant.id} />;
      })}
    </div>
  );
};

export default App;
