let gridContainer;
let gridElement;
let gridHovered;
let gridSize = 16;
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

    /* tool functions */
    const penFunction = function(grid){
        console.log("pen");
        grid.currentTarget.style.backgroundColor = "black";
    }

    const rainbowFunction = function(grid){
        console.log("colored");
        grid.currentTarget.style.backgroundColor = "black";
    }

    const eraserFunction = function(grid){
        console.log("eraser");
        grid.currentTarget.style.backgroundColor = "white";
    }

    const bucketFunction = function(grid){
        console.log("bucket");
        grid.style.backgroundColor = "black";
    }

    const clearFunction = function(grid){
        console.log("clear");
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

    document.getElementById("grid-size").addEventListener("click", (e) => {
        
        gridSize = document.querySelector("#grid-input").value;
        
        if (gridSize < 4)
            gridSize = 4;
        else if (gridSize > 64)
            gridSize = 64;
        
            createGrid(gridSize);    
    });
}

function mousePressed(toolFunction){

    console.log("pressed")

    /*
    if (!!ancientToolFunction){
        gridContainer.removeEventListener("mousedown", mouseDownFunction(ancientToolFunction));
        gridContainer.removeEventListener("mouseup", mouseUpFunction(ancientToolFunction));
        console.log("im deaf")
    }
    */
  
    ancientToolFunction = toolFunction;

    gridContainer.addEventListener("mousedown", mouseDownFunction(toolFunction));
    gridContainer.addEventListener("mouseup", mouseUpFunction(toolFunction));   
    console.log("im listenning?")
}


function mouseDownFunction(toolFunction){
    console.log("mousedown")
    gridHovered.forEach((grid) => {
        grid.addEventListener("click", toolFunction);
        grid.addEventListener("mousemove", toolFunction);
    });  
}


function mouseUpFunction(toolFunction){
    console.log("mouseUp")
    gridHovered.forEach((grid) => {
        grid.removeEventListener("mousemove", toolFunction);
    });
} 