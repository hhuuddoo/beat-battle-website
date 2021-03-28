import React from "react";
import { BrowseGrid, Content, Header, BattleCard } from "../components";

export default function Browse() {
  return (
    <>
      <Header />
      <Content>
        <BrowseGrid>
          <BattleCard title="Hello" status="VOTING" duration="14h" />
        </BrowseGrid>
      </Content>
    </>
  );
}
