import React from "react";
import { BrowseGrid, Content, Header, BattleCard } from "../components";

export default function Browse() {
  return (
    <>
      <Header />
      <Content>
        <BrowseGrid>
          <BattleCard title="EPIC BATTLE #51" status="ONGOING" duration="14h" />
          <BattleCard title="MBLM Battle #3" status="VOTING" duration="14h" />
          <BattleCard
            title="DECAP Challenge 8"
            status="VOTING"
            duration="14h"
          />
          <BattleCard
            title="COMMUNITY BATTLE #34 | $20 prize for 1st place"
            status="VOTING"
            duration="14h"
          />
        </BrowseGrid>
      </Content>
    </>
  );
}
