function msToTime(ms) {
  let minutes = (ms / (1000 * 60)).toFixed(1);
  let hours = (ms / (1000 * 60 * 60)).toFixed(1);
  if (minutes < 60) return Math.floor(minutes) + " Min";
  else return Math.floor(hours) + " Hrs";
}
export { msToTime };
