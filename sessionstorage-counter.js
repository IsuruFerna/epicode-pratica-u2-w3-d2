const placeNumber = document.getElementById("counter");
const body = document.querySelector("body");

// returns random color
const randomColor = function () {
   const color = [];
   for (let i = 0; i < 3; i++) {
      let value = Math.floor(Math.random() * 255 + 1);
      color.push(value);
   }
   return `rgb(${color})`;
};

// setting sessionStorage
if (!sessionStorage.getItem("counter")) {
   // if there is no "counter" create and set it to 0
   sessionStorage.setItem("counter", 0);
}

// update session storage and counter
setInterval(function () {
   let counter = sessionStorage.getItem("counter");
   counter++;
   sessionStorage.setItem("counter", counter);
   placeNumber.innerText = counter;
   body.style.backgroundColor = randomColor();
}, 1000);
