const btn = document.querySelector("#btn");
const cpy = document.querySelector("#cpy");
const limit = document.getElementById("limit");
const password = document.querySelector("#password");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const num = document.getElementById("num");
const symbol = document.getElementById("symbol");

let captials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smalls = "abcdefghijklmnopqrstuvwxyz";
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = "!@#$%&*_+-=/*";

function getCaptial() {
  return captials[getRandom(captials)];
}

function getSmall() {
  return smalls[getRandom(smalls)];
}

function getNum() {
  return numbers[getRandom(numbers)];
}

function getSymbol() {
  return symbols[getRandom(symbols)];
}

function generatepassword() {
  let password = "";

  for (let index = 0; index < limit.value; index++) {
    password += getItem();
  }
  return password;
}

function getItem() {
  let x = [];
  if (upper.checked) {
    x.push(getCaptial());
  }

  if (lower.checked) {
    x.push(getSmall());
  }
  if (num.checked) {
    x.push(getNum());
  }
  if (symbol.checked) {
    x.push(getSymbol());
  }

  return x[getRandom(x)];
}
function getRandom(item) {
  return Math.floor(Math.random() * item.length);
}

btn.addEventListener("click", () => {
  let p = generatepassword();
  password.value = p;
});

cpy.addEventListener("click", () => {
  navigator.clipboard.writeText(password.value);
  cpy.innerText='copied';

});
