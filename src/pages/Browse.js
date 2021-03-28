import React from "react";
import { BrowseGrid, Content, Header } from "../components";

export default function Browse() {
  return (
    <>
      <Header />
      <Content>
        <BrowseGrid></BrowseGrid>
      </Content>
    </>
  );
}
