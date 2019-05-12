const body = document.querySelector("body");
const image = new Image();
image.src = `https://source.unsplash.com/1600x900/?nature,water`;
image.classList.add("bgImage");
body.appendChild(image);

// const IMG_NUMBER = 4;

// function paintImage(imgNumber) {
//   const image = new Image();
//   image.src = `images/${imgNumber + 1}.jpg`;
//   image.classList.add("bgImage");
//   body.appendChild(image);
// }

// function genRandom() {
//   const number = Math.floor(Math.random() * IMG_NUMBER);
//   return number;
// }

// function init() {
//   const randomNumber = genRandom();
//   paintImage(randomNumber);
// }

// init();
