const clock = document.querySelector("h2");
// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const DDAY = xmasDay - today;
  const days = Math.floor(DDAY / (1000 * 60 * 60 * 24));
  const hours = Math.floor((DDAY % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((DDAY % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((DDAY % (1000 * 60)) / 1000);
  clock.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m  ${seconds < 0 ? `0${seconds}` : seconds}s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
