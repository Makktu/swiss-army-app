export default function getFormattedTime(secondsElapsed) {
  // convert secondsElapsed into a string with format 'hh:mm:ss'
  console.log('func', secondsElapsed);

  // * get hours/minutes/seconds from secondsElapsed
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let returnedSeconds = ``;
  let returnedMinutes = ``;
  let returnedHours = ``;

  let secondsZero = true;

  const totalMinutes = Math.floor(secondsElapsed / 60);
  seconds = secondsElapsed % 60;
  hours = Math.floor(totalMinutes / 60);
  minutes = totalMinutes % 60;

  if (seconds > 9) {
    returnedSeconds = `${seconds}`;
  } else {
    returnedSeconds = `0${seconds}`;
  }

  if (minutes > 9) {
    returnedMinutes = `${minutes}`;
  } else {
    returnedMinutes = `0${minutes}`;
  }

  if (hours > 9) {
    returnedHours = `${returnedHours}`;
  } else {
    returnedHours = `0${returnedHours}`;
  }

  console.log(hours > 9);

  return `${returnedHours}:${returnedMinutes}:${returnedSeconds}`;
}
