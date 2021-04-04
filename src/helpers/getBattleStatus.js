import { msToTime } from "./msToTime";

// Get current status of battle
function getBattleStatus(submissionClose, votingClose) {
  const SECONDS_TO_MILLI = 1000;
  const MILLI_TO_HOURS = 3600000;
  const submissionCloseTime = new Date(submissionClose * SECONDS_TO_MILLI);
  const votingCloseTime = new Date(votingClose * SECONDS_TO_MILLI);
  const now = new Date();
  let status = "Closed";
  let duration = "";

  if (now <= submissionCloseTime) {
    status = "Open";
    duration = msToTime(submissionCloseTime - now);
  } else if (now <= votingCloseTime) {
    status = "Voting";
    duration = msToTime(submissionCloseTime - now);
  }

  return { status, duration };
}

export { getBattleStatus };
