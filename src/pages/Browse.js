import React, { useEffect, useState } from "react";
import { BrowseGrid, Content, Header, BattleCard } from "../components";
import * as ROUTES from "../constants/routes";
import data from "../testFirstbaseData.json";

export default function Browse() {
  const [battles, setBattles] = useState([]);

  useEffect(() => {
    setBattles(data.battles);
  }, [data]);

  return (
    <>
      <Header onBrowse />
      <Content>
        <BrowseGrid>
          {battles.map((battle, idx) => (
            <BattleCard
              key={idx}
              to={`${ROUTES.BROWSE}/${battle.id}`}
              title={battle.title}
              status={battle.votingCloseTime}
              duration={battle.submissionCloseTime}
            />
          ))}
        </BrowseGrid>
      </Content>
    </>
  );
}
