$(document).ready(function() {
  "use strict";
  const greetingForm = document.querySelector(".js-greeting__form"),
    greetingInput = greetingForm.querySelector("input");
  const greeting = document.querySelector(".js-greetings");

  const USER_LS = "currentUser";
  const SHOWING_CN = "showing";

  function saveName(text) {
    localStorage.setItem(USER_LS, text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const currentValue = greetingInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
  }

  function askForName() {
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit", handleSubmit);
  }

  function paintGreeting(text) {
    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
  }

  function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    currentUser === null ? askForName() : paintGreeting(currentUser);

    /*if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }*/
  }

  function init() {
    loadName();
  }

  init();
});
