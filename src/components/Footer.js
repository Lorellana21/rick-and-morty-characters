import React from "react";
import "../stylesheets/layout/_footer.scss";

const Footer = (props) => {
  return (
    <div className="footer">
      <span className="footer__text">Made by Lorena Orellana</span>
      <span className="footer__copy">&copy;Adalab 2021</span>
    </div>
  );
};

export default Footer;
