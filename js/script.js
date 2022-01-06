let gridContainer;
let gridElement;
let gridSize = 16;

window.onload = function(){

    createGrid(gridSize);
    menuButtonPressed();

}

function createGrid(gridSize){

    gridContainer = document.querySelector(".grid-container");

    if (gridContainer.hasChildNodes())
        gridContainer.textContent="";

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (i=0;i<gridSize**2;i++){
        gridElement = document.createElement("div");
        gridElement.classList.add("grid");
        gridContainer.appendChild(gridElement);
    }
}

function menuButtonPressed(){ 

    const gridHovered = document.querySelectorAll(".grid");

    /* tool functions */
    const penFunction = function(grid){
        console.log("penis");
        grid.currentTarget.style.backgroundColor = "black";
    }

    const rainbowFunction = function(grid){
        console.log("colrooxe");
        grid.currentTarget.style.backgroundColor = "black";
    }

    const eraserFunction = function(grid){
        console.log("eraszerad");
        grid.currentTarget.style.backgroundColor = "white";
    }

    const bucketFunction = function(grid){
        console.log("bbubuz");
        grid.style.backgroundColor = "black";
    }

    const clearFunction = function(grid){
        console.log("claer");
        grid.style.backgroundColor = "white";
    }
    
    document.querySelector("#pen").addEventListener("click", () => {
        mousePressed(penFunction);
    });

    document.querySelector("#rainbow").addEventListener("click", () => {
        mousePressed(rainbowFunction);
    });

    document.querySelector("#eraser").addEventListener("click", () => {
        mousePressed(eraserFunction);
    });

    document.querySelector("#bucket").addEventListener("click", () => {
        gridHovered.forEach(bucketFunction); 
    });

    document.querySelector("#clear").addEventListener("click", () => {
        gridHovered.forEach(clearFunction);
    });

    document.querySelector("#grid-size").addEventListener("click", () => {
        gridSize = document.querySelector("#grid-input").value;
        if (gridSize <= 0)
            gridSize = 4;
        else if (gridSize > 64)
            gridSize = 64;
        createGrid(gridSize);    
    });
}

function mousePressed(toolFunction){

    const gridHovered = document.querySelectorAll(".grid");

    document.addEventListener("mousedown", () => {
        gridHovered.forEach((grid) => {
            grid.addEventListener("click", toolFunction);
            grid.addEventListener("mousemove", toolFunction);
        });  
    });
    document.addEventListener("mouseup", () => {
        gridHovered.forEach((grid) => {
            grid.removeEventListener("mousemove", toolFunction);
        });
    });        
}