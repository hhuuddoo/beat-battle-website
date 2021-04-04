import React, { useEffect, useState } from "react";
import { BrowseGrid, Content, Header, BattleCard } from "../components";
import * as ROUTES from "../constants/routes";
import { getBattleStatus } from "../helpers/getBattleStatus";
import { useBattles } from "../helpers/useBattles";
import data from "../testFirstbaseData.json";

export default function Browse() {
  const { battles } = useBattles();

  return (
    <>
      <Header onBrowse />
      <Content>
        <BrowseGrid>
          {battles.map((battle) => {
            const submissionSeconds = battle.submissionCloseTime.seconds;
            const votingSeconds = battle.votingCloseTime.seconds;
            const { status, duration } = getBattleStatus(
              submissionSeconds,
              votingSeconds
            );
            return (
              <BattleCard
                key={battle.battleID}
                to={`${ROUTES.BROWSE}/${battle.battleID}`}
                title={battle.title}
                status={status}
                duration={duration}
              />
            );
          })}
        </BrowseGrid>
      </Content>
    </>
  );
}
