const controls = document.querySelector("#controls");
const buttons = controls.querySelectorAll("button");
const div = document.querySelector("#boxes");
const boxes = div.querySelector(".box");

let counter = 0;
let width = 30;
let height = 30;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
  const el = document.createElement("div");
  el.classList.add("box");
  el.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;  
  el.style.width = width + "px"; 
  width += 10;
  el.style.height = height + "px"; 
  height += 10;
  el.innerText = ++counter; 
  div.append(el);
  };
};

const createButton = document.querySelector('[data-action="create"]');

createButton.addEventListener("click", () => { 
  const num = document.querySelector('[type="number"]').value
  const numOfDivs = parseInt(num);
  createBoxes(numOfDivs);
});

function destroyBoxes() {
  div.removeChild(div.lastChild);
  width -= 10;
  height -= 10;
};

const destroyButton = document.querySelector('[data-action="destroy"]');

destroyButton.addEventListener("click", () => {
  const num = document.querySelector('[type="number"]').value
  const numOfDivs = parseInt(num);
  destroyBoxes(numOfDivs);  
});


