import React from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="main-nav container">
        <ul className="main-nav__items">
          <li>
            <Link className="main-nav__items--logo" to={ROUTES.HOME}>
              BB
            </Link>
          </li>
          <li>
            <Link to={ROUTES.BROWSE}>Browse</Link>
          </li>
          <li>
            <Link to={ROUTES.CREATE}>Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
