import React from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

export default function Header({ onBrowse = false, onCreate = false }) {
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
            <Link to={ROUTES.CREATE} className={onCreate ? `active` : null}>
              Create
            </Link>
          </li>
          <li>
            <Link to={ROUTES.BROWSE} className={onBrowse ? `active` : null}>
              Browse
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
