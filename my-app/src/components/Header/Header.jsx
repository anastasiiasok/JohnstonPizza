import React from "react";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="150" src="./img/logo.png" alt="Pizza logo" />
          <div>
            <h1>Johnston Pizza</h1>
            <p>The Best Pizza in Jersey City</p>
            <p>by Anastasiia Soktoeva</p>
          </div>
        </div>
        <div className="header__cart">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;
