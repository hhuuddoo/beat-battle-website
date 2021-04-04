function msToTime(ms) {
  let seconds = (ms / 1000).toFixed(1);
  let minutes = (ms / (1000 * 60)).toFixed(1);
  let hours = (ms / (1000 * 60 * 60)).toFixed(1);
  if (seconds < 60) return Math.floor(seconds) + " Sec";
  else if (minutes < 60) return Math.floor(minutes) + " Min";
  else return Math.floor(hours) + " Hrs";
}
export { msToTime };
