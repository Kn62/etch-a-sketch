const gridContainer = document.querySelector(".grid-container");
const buttonStart = document.querySelector(".start")


const startGame = function(){

    let gridSize = parseInt(prompt("Choose Square Size"));
    let squareHeight = 100/gridSize;
    let squareWidth = 100/gridSize;
    
    for (let i = 0; i < gridSize * gridSize; i++){
        const square = document.createElement("div");
        square.style.height = `${squareHeight}%`; 
        square.style.width = `${squareWidth}%`;
        square.addEventListener('mouseover', () => {
            if (Number(square.style.opacity) < 1) {
                square.style.opacity = Number(square.style.opacity) + 0.1
            } 
            square.style.background = `rgb(0,0,0)`;
        })
        gridContainer.appendChild(square);

    }
}

buttonStart.addEventListener("click", startGame)