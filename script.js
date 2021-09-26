const gridContainer = document.querySelector(".grid-container");


//rgb button
const rgbBtn = document.querySelector(".rgbButton");
rgbBtn.addEventListener("mousedown", rgbMode);
function rgbMode() {
  const getAllGrid = document.querySelectorAll(".grid");
  getAllGrid.forEach((e) => e.classList.remove("noRGB"));
}
//Black Ink BTn
const blackBtn = document.querySelector(".noRgbButton");
blackBtn.addEventListener("mousedown", blackMode);
function blackMode() {
  const getAllGrid = document.querySelectorAll(".grid");
  getAllGrid.forEach((e) => e.classList.add("noRGB"));
}

//erase btn
const eraseBtn = document.querySelector(".eraseButton");
eraseBtn.addEventListener("mousedown", restartGrid);

//grid resolution btn
const gridBtn = document.querySelector(".gridButton");
gridBtn.addEventListener("mousedown", RecreateGrid);


//erase all the board removing the mouseOverClassList
function restartGrid() {
  const getAllGrid = document.querySelectorAll(".grid");
  getAllGrid.forEach((e) => (e.style.background = "white"));
}
// function that creates the grid and allow draw
function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    //create a div, add class "grid" and append him to the grid container
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);
    // allows draw with a event listener

    const mouseOver = function () {
      //BLack color if noRGB class
      if (this.classList == "grid noRGB") {
        this.style.background = "black";
      } else {
        // random color if ! NORGB class
        var a = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var c = Math.floor(Math.random() * 256);
        var randomColor = "rgb(" + a + "," + b + "," + c + ")";
        this.style.background = randomColor;
      }
    };

    grid.addEventListener("mouseover", mouseOver);
    //change the GridTemplate rows/columns depending of the gridSize
    gridContainer.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(" + gridSize + ", 1fr)";
  }
}
//create a grid with a new size. the grid size is defined by a prompt, and clean the original grid.
function RecreateGrid() {
  var gridPromp = prompt("Define the grid-size in a range of 1-128 :)");
  if (gridPromp > 128) {
    gridPromp = 128;
  }
  createGrid(gridPromp);
  restartGrid();
}
//set default 16x16 grid
createGrid(16);
