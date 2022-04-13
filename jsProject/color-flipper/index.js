const btn = document.getElementById("btn");
const color = document.getElementById("color");
let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn.addEventListener("click", () => {
  console.log("Clicked");
  let hexColor = "#";

  for (let index = 0; index < 6; index++) {
    hexColor += hex[getRandNo()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  color.style.color=hexColor;
});

function getRandNo() {
  return Math.floor(Math.random() * hex.length);
}
