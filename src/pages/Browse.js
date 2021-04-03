import React, { useEffect, useState } from "react";
import { BrowseGrid, Content, Header, BattleCard } from "../components";
import data from "../testFirstbaseData.json";

export default function Browse() {
  const [battles, setBattles] = useState([]);

  useEffect(() => {
    setBattles(data.battles);
  }, [data]);

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
              onClick={() => alert(battle.id)}
            />
          ))}
        </BrowseGrid>
      </Content>
    </>
  );
}
