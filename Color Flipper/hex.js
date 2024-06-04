const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let hexArr = [];
let hexStr = "";

function generateHexCode() {
  hexArr = [];
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hex.length);
    let hexChar = hex[randomIndex];
    hexArr.push(hexChar);
  }
  hexStr = "#" + hexArr.join("");
  return hexStr;
}

function setHexValue() {
  let newHex = generateHexCode();
  document.body.style.backgroundColor = newHex;
  color.textContent = newHex;
}

btn.addEventListener("click", setHexValue);
