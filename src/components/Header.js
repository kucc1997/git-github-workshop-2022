import React from "react";
import "../css/UserCard.css";

const Header = () => {
  return (
    <div className="header-title">
      <img src="kucc.png" alt="kucc-logo" height={100} width={120} />
      <h1 style={{ color: "#373F5F" }}>
        KUCC - Git and Github : All you need to know!{" "}
      </h1>
    </div>
  );
};

export default Header;
