import React from "react";
import logo from "../images/Rick_and_Morty_logo.png";
import "../stylesheets/layout/_header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__img-container">
          <img src={logo} alt="rick-and-morty-logo" />
        </div>
      </header>
    );
  }
}

export default Header;
