window.addEventListener("scroll", () => {
});

let timeoutId = setTimeout(() => {
  console.log("please login first");
}, 3000);

console.log("javascript");
console.log(timeoutId);

let counterText = document.querySelector(".text-primary");
let count = 0;

let intervalId = setInterval(() => {
  counterText.innerText = count;

  if (count === 100) {
    clearInterval(intervalId);
  }

  count++;
}, 30);

console.log(intervalId);

let contentBox = document.getElementById("scroll-div");

contentBox.addEventListener("scroll", (event) => {
  console.log(event.target.scrollTop);

  if (event.target.scrollTop > 300) {
    console.log("greater than 300");

    contentBox.classList.remove("alert-success");
    contentBox.classList.add("alert-danger");
  }
});