const form = document.querySelector(".js-form"),
  input = form.querySelector("input");
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
SHOWING_CN = "showing";

function handleSubmit() {
  event.preventDefault();
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  currentUser === null ? askForName() : paintGreeting(currentUser);
}

function init() {
  loadName();
}

init();
