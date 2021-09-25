
const gridContainer = document.querySelector(".grid-container")
function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid")
    gridContainer.appendChild(grid)
   /*  const gridMDown =function(){grid.classList.add("mouseDown");}
    grid.addEventListener("mousedown", gridMDown) */
  }

}
