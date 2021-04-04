import React from "react";
import {
  BrowseGrid,
  Content,
  Header,
  BattleCard,
  BattleGrid,
  Footer,
} from "../components";
import * as ROUTES from "../constants/routes";
import { getBattleStatus } from "../helpers/getBattleStatus";
import { useBattles } from "../hooks/useBattles";

export default function Browse() {
  const { battles, loading } = useBattles();

  console.log(battles ? "true" : "false");

  return (
    <>
      <Header onBrowse />
      <Content>
        {loading ? (
          <BattleGrid>
            <h2 className="battle-title">Loading...</h2>
          </BattleGrid>
        ) : battles.length > 0 ? (
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
        ) : (
          <BattleGrid>
            <h2 className="battle-title">No battles avaliable</h2>
          </BattleGrid>
        )}
      </Content>
      <Footer />
    </>
  );
}
