const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${("0" + hours).slice(-2)}:${("0" + minutes).slice(
    -2
  )}:${("0" + seconds).slice(-2)}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
