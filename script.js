const gridContainer = document.querySelector(".grid-container");

//grid btn
const gridBtn = document.querySelector(".gridButton");
gridBtn.addEventListener("mousedown", RecreateGrid);
//create a grid with a new size. the grid size is defined by a prompt, and clean the original grid.
function RecreateGrid() {
  var gridPromp = prompt("Define the grid-size in a range of 1-100 :)");
  createGrid(gridPromp);
  restartGrid();
}
//erase btn
const eraseBtn = document.querySelector(".eraseButton");
eraseBtn.addEventListener("mousedown", restartGrid);
//erase all the board removing the mouseOverClassList
function restartGrid() {
  const getAllGrid = document.querySelectorAll(".grid");
  getAllGrid.forEach((e) => e.classList.remove("mouseOver"));
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
      this.classList.add("mouseOver");
    };

    grid.addEventListener("mouseover", mouseOver);
    //change the GridTemplate rows/columns depending of the gridSize
    gridContainer.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(" + gridSize + ", 1fr)";
  }
}
//set default 16x16 grid
createGrid(16);
