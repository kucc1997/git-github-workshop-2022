import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";
import Participants from "./data/participants.json";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <h2>Successful PR Merge Count: {Participants.length} 🔥</h2>
      <div className="main-content">
        <div className="card-list">
          {Participants.map((participant) => {
            return (
              <UserCard participant={participant} key={participant.email} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
