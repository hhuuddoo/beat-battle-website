import React from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1 className="hero__title">Beat Battles</h1>
        <Link to={ROUTES.BROWSE} className="hero__button hero__button--browse">
          Browse
        </Link>
        <Link to={ROUTES.CREATE} className="hero__button hero__button--create">
          Create
        </Link>
      </div>
    </>
  );
}
