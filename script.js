const gridContainer = document.querySelector(".grid-container");

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
  }
}

function restartGrid(){
    const getAllGrid = document.querySelectorAll(".grid")
}