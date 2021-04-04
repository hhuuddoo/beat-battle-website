import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { Header, Footer, Error } from "../components";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <Error>
        Oops, it seems that this page does not exist.{" "}
        <Link to={ROUTES.HOME}>Return Home</Link>
      </Error>
      <Footer />
    </>
  );
}
