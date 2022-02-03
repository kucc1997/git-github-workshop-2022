import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";
import Participants from "./data/participants.json";
import "./css/App.css";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header />
      <h2>Successful PR Merge Count: {Participants.length} 🔥</h2>
      <Search onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="main-content">
        <div className="card-list">
          {Participants.filter((participant) => {
            if (searchTerm === "") {
              return participant;
            } else if (
              participant.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return participant;
            }
          }).map((participant, key) => {
            return <UserCard participant={participant} key={key} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
