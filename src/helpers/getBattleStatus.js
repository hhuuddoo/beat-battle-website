import { msToTime } from "./msToTime";
import * as STATUS from "../constants/status";

// Get current status of battle
function getBattleStatus(submissionClose, votingClose) {
  const SECONDS_TO_MILLI = 1000;
  const submissionCloseTime = new Date(submissionClose * SECONDS_TO_MILLI);
  const votingCloseTime = new Date(votingClose * SECONDS_TO_MILLI);
  const now = new Date();
  let status = STATUS.CLOSED;
  let duration = "";

  if (now <= submissionCloseTime) {
    status = STATUS.OPEN;
    duration = msToTime(submissionCloseTime - now);
  } else if (now <= votingCloseTime) {
    status = STATUS.VOTING;
    duration = msToTime(submissionCloseTime - now);
  }

  return { status, duration };
}

export { getBattleStatus };
