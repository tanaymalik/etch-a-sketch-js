const gridContainer = document.querySelector(".grid-container")


noOfSquares = 10;
totalNoOfSquares = noOfSquares*noOfSquares;

for (let i = 1; i <= totalNoOfSquares; i++) {
    const newSquare = document.createElement("div")

    newSquare.style.height = '48px';
    newSquare.style.width = '48px';
    newSquare.style.border = '1px solid black'
    newSquare.classList.add("new-square");


    gridContainer.appendChild(newSquare);  
}

let firstSquare = gridContainer.querySelector("div");

let size = window.getComputedStyle(firstSquare).getPropertyValue('height');

size = parseFloat(size);

let width = (size + 2) * noOfSquares + (noOfSquares*2);
gridContainer.style.width = width + 'px';


const allSquares = document.querySelectorAll(".new-square");



function hover(square) {
    square.style.backgroundColor = "black";

}
function unhover(square) {
    square.style.backgroundColor = "white";
}

allSquares.forEach(square => {
    square.addEventListener("mouseenter", () => hover(square));
    square.addEventListener("mouseleave", () => unhover(square));
})