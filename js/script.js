let gridContainer;
let gridElement;
let gridHovered;
let gridSize = 16;

let selectedColor = "#000000";

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
        mousePressed( (grid) => {
            console.log("pen")
            grid.currentTarget.style.backgroundColor = selectedColor;
        });
    });

    document.querySelector("#input-color").addEventListener("change", (event) => {
        console.log("color")
        selectedColor = event.target.value;      
    });

    document.querySelector("#eraser").addEventListener("click", () => {
        mousePressed( (grid) => {
            console.log("eraser")
            grid.currentTarget.style.backgroundColor = "white";
        });
    });

    document.querySelector("#bucket").addEventListener("click", () => {
        gridHovered.forEach( (grid) => {
            console.log("bucket")
            grid.style.backgroundColor = selectedColor;    
        }); 
    });

    document.querySelector("#clear").addEventListener("click", () => {
        gridHovered.forEach( (grid) => {
            console.log("clear")
            grid.style.backgroundColor = "white";    
        });
    });

    document.querySelector("#grid-input").addEventListener("change", (event) => {
        
        gridSize = event.target.value;
        
        (gridSize < 4) ? gridSize = 4 : (gridSize > 64) ? gridSize = 64 : gridSize = gridSize;
        
        createGrid(gridSize);    
    });
}

function mousePressed(toolFunction){

    document.addEventListener("mousedown", mouseListennerFunction(toolFunction,true));
    document.addEventListener("mouseup", mouseListennerFunction(toolFunction,false));   

}

function mouseListennerFunction(toolFunction, selectedDown){
        
    if (selectedDown){
        return mouseDown = function (){
            
            gridHovered.forEach((grid) => {
                grid.addEventListener("click", toolFunction);
                grid.addEventListener("mousemove", toolFunction);
            }); 
             
        }
    }
    
    return  mouseUp = function (){
    
        gridHovered.forEach((grid) => {
            grid.removeEventListener("mousemove", toolFunction);
        }); 
    }
}