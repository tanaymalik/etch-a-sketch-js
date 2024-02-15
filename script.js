const gridContainer = document.querySelector(".grid-container")





for (let i = 1; i <= 256; i++) {
    const newSquare = document.createElement("div")

    newSquare.style.height = '48px';
    newSquare.style.width = '48px';
    newSquare.style.border = '1px solid black'



    
    
   


    gridContainer.appendChild(newSquare);  
}

let firstSquare = gridContainer.querySelector("div");

let size = window.getComputedStyle(firstSquare).getPropertyValue('height');

size = parseFloat(size);

let width = (size + 2) * 16 + 28;
gridContainer.style.width = width + 'px';