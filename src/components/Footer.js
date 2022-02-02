import React from "react";
import "../css/UserCard.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p> Copyright &copy; 2022 | KUCC | All Rights Reserved</p>
      <div className="socials">
        <SocialIcon
          url="http://kucc.ku.edu.np/"
          bgColor="#38c0ce"
          style={{ height: 25, width: 25, marginRight: "15px" }}
        />
        <SocialIcon
          url="https://www.facebook.com/kucc1997"
          style={{ height: 25, width: 25, marginRight: "15px" }}
        />
        <SocialIcon
          url="https://github.com/kucc1997"
          style={{ height: 25, width: 25 }}
        />
      </div>
    </div>
  );
};

export default Footer;
