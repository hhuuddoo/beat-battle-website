import React, { useEffect, useState } from "react";
import { BrowseGrid, Content, Header, BattleCard } from "../components";
import data from "../testFirstbaseData.json";

export default function Browse() {
  const [battles, setBattles] = useState([]);

  useEffect(() => {
    setBattles(data.battles);
  }, []);

  return (
    <>
      <Header />
      <Content>
        <BrowseGrid>
          {battles.map((battle, idx) => (
            <BattleCard
              key={idx}
              title={battle.title}
              status={battle.votingCloseTime}
              duration={battle.submissionCloseTime}
              onClick={() => console.log("Hello")}
            />
          ))}
          {/* <BattleCard title="EPIC BATTLE #51" status="ONGOING" duration="14h" />
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
          /> */}
        </BrowseGrid>
      </Content>
    </>
  );
}
