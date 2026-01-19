let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container");

const colorArray = [
  "red",
  "green",
  "blue",
  "yellow",
  "gold",
  "lightseagreen",
  "cyan",
  "tomato",
  "lightcoral",
  "yellowgreen",
  "aqua",
  "brown",
  "pink",
];

const changeColor = (color) => {
  
  container.style.backgroundColor = color;
  currentColorValue.innerText = color;
};

const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomNumber];
};


const handleRandomButton = () => {
 let color = generateRandomColor();
 changeColor(color)
};

const handleApplyButton = () => {
  const color = colorInput.value;
  changeColor(color);
};

randomBtn.addEventListener("click", handleRandomButton);

applyBtn.addEventListener("click", handleApplyButton);
