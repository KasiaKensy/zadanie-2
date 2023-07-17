const controls = document.querySelector("#controls");
const buttons = controls.querySelectorAll("button");
const div = document.querySelector("#boxes");
const amount = controls.querySelector("input").value;

let counter = 0;
let width = 30;
let height = 30;


function createBoxes(amount) {
  const el = document.createElement("div");
  el.classList.add("box");
  el.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;  
  el.style.width = width + "px"; 
  el.style.height = height + "px"; 
  el.style.color = "#333";
  el.innerText = ++counter;
  div.append((el)*amount);
};

const createButton = document.querySelector('[data-action="create"]');

createButton.addEventListener("click", () => { 
  createBoxes(amount);
  width += 10;
  height += 10;
});

function destroyBoxes() {
  div.removeChild(div.lastChild);
};

const destroyButton = document.querySelector('[data-action="destroy"]');

destroyButton.addEventListener("click", () => {
  destroyBoxes();
  --counter;
  width -= 10;
  height -= 10;
});
