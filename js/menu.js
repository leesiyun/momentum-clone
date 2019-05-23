const menu = document.querySelector(".menu");
const list = document.querySelector(".list");

function hidden() {
  if (list.classList) {
    list.classList.toggle("hidden");
  } else {
    const classes = list.hidden.split(" ");
    const existingIndex = classes.indexOf(hidden);

    if (existingIndex >= 0) classes.splice(existingIndex, 1);
    else classes.push(hidden);

    list.hidden = classes.join(" ");
  }
}

menu.addEventListener("click", hidden);

// $(".menu").on("click", function() {
//   $(".list").toggleClass("hidden");
// });
