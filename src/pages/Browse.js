import React from "react";
import {
  BrowseGrid,
  Content,
  Header,
  BattleCard,
  BattleGrid,
  Error,
  Footer,
} from "../components";
import * as ROUTES from "../constants/routes";
import { getBattleStatus } from "../helpers/getBattleStatus";
import { useBattles } from "../hooks/useBattles";

export default function Browse() {
  const { battles, loading, error } = useBattles();

  return (
    <>
      <Header onBrowse />

      {loading ? (
        <Content>
          <BattleGrid>
            <h2 className="battle-title">Loading...</h2>
          </BattleGrid>
        </Content>
      ) : error ? (
        <Error>{error}</Error>
      ) : battles.length > 0 ? (
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
      ) : (
        <Content>
          <BattleGrid>
            <h2 className="battle-title">No battles avaliable</h2>
          </BattleGrid>
        </Content>
      )}

      <Footer />
    </>
  );
}
