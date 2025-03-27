function realClock() {
  let now = new Date();
  //importing form date class
  let today = now.toLocaleDateString();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  //formating the time to show 2 digits

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //update the clock display
  document.getElementById(
    "displayTime"
  ).textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById("displayDay").textContent = today;
}
setInterval(realClock, 1000);
realClock();
