let gridContainer;
let gridElement;
let gridSize;

window.onload = function(){

    createGrid(256);

}

function one() {
    gridContainer = document.querySelector(".grid-container");
    gridElement = document.createElement('div');
    gridElement.classList.add("grid");
    gridContainer.appendChild(gridElement);
}

function createGrid(gridSize){
    gridContainer = document.querySelector(".grid-container");
    for (i=0;i<gridSize;i++){
        gridElement = document.createElement("div");
        gridElement.classList.add("grid");
        gridContainer.appendChild(gridElement);
    }
}