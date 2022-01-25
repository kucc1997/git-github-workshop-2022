import React from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Participants from "./data/participants.json";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="card-list">
        {Participants.map((participant) => {
          return <UserCard participant={participant} key={participant.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
