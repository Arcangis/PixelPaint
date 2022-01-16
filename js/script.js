let gridContainer;
let gridElement;
let gridHovered;
let gridSize = 16;

let selectedColor = "#000000";

let toolFunction;
let ancientToolFunction;

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

    gridHovered = document.querySelectorAll(".grid");

}

function menuButtonPressed(){ 
    
    document.querySelector("#pen").addEventListener("click", () => {
        ancientToolFunction = toolFunction;
        toolFunction = (grid) => {
            grid.currentTarget.style.backgroundColor = selectedColor;
        };
        mousePressed();
    });

    document.querySelector("#input-color").addEventListener("change", (event) => {
        selectedColor = event.target.value;   
    });

    document.querySelector("#eraser").addEventListener("click", () => {
        ancientToolFunction = toolFunction;
        toolFunction = (grid) => {
            grid.currentTarget.style.backgroundColor = "white";
        };
        mousePressed();
    });

    document.querySelector("#bucket").addEventListener("click", () => {
        gridHovered.forEach( (grid) => {
            grid.style.backgroundColor = selectedColor;    
        }); 
    });

    document.querySelector("#clear").addEventListener("click", () => {
        gridHovered.forEach( (grid) => {
            grid.style.backgroundColor = "white";    
        });
    });

    document.querySelector("#grid-input").addEventListener("change", (event) => {
        
        gridSize = event.target.value;
        
        (gridSize < 4) ? gridSize = 4 : (gridSize > 64) ? gridSize = 64 : gridSize = gridSize;
        
        createGrid(gridSize);    
    });
}

function mousePressed(){

    document.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseup", mouseUp);  
   
    gridHovered.forEach((grid) => {
        grid.removeEventListener("click", ancientToolFunction);
    });

}

function mouseDown(){
            
    gridHovered.forEach((grid) => {
        grid.addEventListener("click", toolFunction);
        grid.addEventListener("mousemove", toolFunction);
    }); 
             
}

    
function mouseUp (){
    
    gridHovered.forEach((grid) => {
        grid.removeEventListener("mousemove", toolFunction);
    }); 
}