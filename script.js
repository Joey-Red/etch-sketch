let blocks = 16;
function setBlockValue() {
  let inputVal = document.getElementById("numInput").value;
  blocks = inputVal;
  resetGrid();
}
const container = document.getElementById("container");
function gridLayout(blocks) {
  container.style.gridTemplateColumns = `repeat(${blocks}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${blocks}, 1fr)`;
  for (let i = 0; i < blocks * blocks; i++) {
    const gridBlock = document.createElement("div");
    container.appendChild(gridBlock);
    gridBlock.addEventListener("mouseover", colorRandomizer);
  }

  function colorRandomizer(e) {
    randomColor1 = Math.floor(Math.random() * 256);
    randomColor2 = Math.floor(Math.random() * 256);
    randomColor3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomColor1},${randomColor2},${randomColor3})`;
  }
}
gridLayout(blocks);

function removeKnobs() {
  let switch1 = document.getElementById("circleL");
  let switch2 = document.getElementById("circleR");
  switch1.classList.toggle("invis");
  switch2.classList.toggle("invis");
}

function shake() {
  let shakes = document.getElementById("container");
  shakes.classList.toggle("animate");
}

function resetGrid() {
  clearGrid();
  gridLayout(blocks);
}
function clearGrid() {
  container.innerHTML = "";
}

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", removeKnobs);

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", shake);

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", resetGrid);

const btn4 = document.getElementById("numInputButton");
btn4.addEventListener("click", setBlockValue);
