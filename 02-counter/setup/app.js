const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increment = document.querySelector(".increase");

const display = document.getElementById("value");

let count = 0;
let zero = 0;

decrease.addEventListener("click", () => {
  count--;
  display.innerHTML = count;
});

reset.addEventListener("click", () => {
  display.innerHTML = 0;
  console.log("click");
});

increment.addEventListener("click", () => {
  count++;
  display.innerHTML = n(count);
});

function n(a) {
  return a;
}
