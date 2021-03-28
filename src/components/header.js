import React from "react";

export default function Header({ browseLink, createLink }) {
  return (
    <header className="header">
      <nav className="main-nav container">
        <ul className="main-nav__items">
          <li>
            <a className="main-nav__items--logo" href="">
              BB
            </a>
          </li>
          <li>
            <a href="">Browse</a>
          </li>
          <li>
            <a href="">Create</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
