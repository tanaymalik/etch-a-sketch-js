// Selecting DOM elements
const gridContainer = document.querySelector(".grid-container");
const positive = document.querySelector(".positive");
const negative = document.querySelector(".negative");
const squareResult = document.querySelector(".squareResult")


let noOfSquares = 16;


function gridCreation() {
    // Clear the existing grid
    gridContainer.innerHTML = '';
    
    
    const totalNoOfSquares = noOfSquares * noOfSquares;
    
    
    const width = 960;
    boxSide = Math.round(width / noOfSquares) - 2;

    // Loop to create all the mini squares
    for (let i = 1; i <= totalNoOfSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.style.height = boxSide + 'px';
        newSquare.style.width = boxSide + 'px';
        newSquare.style.border = '1px solid black';
        newSquare.classList.add("new-square");
        gridContainer.appendChild(newSquare);
    }

    
    hovering_work();
}

function pauseForOneSecond() {
    return new Promise(resolve => {
        setTimeout(resolve, 3000); // 1000 milliseconds = 1 second
    });
}

// Function to handle hover functionality
function hovering_work() {
    
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
    });
}


gridCreation();

 //(increase number of squares)
positive.addEventListener("click", function () {
    noOfSquares += 8;
    console.log(noOfSquares)
    gridCreation();
});

//(decrease number of squares)
negative.addEventListener("click", function () {
    noOfSquares -= 8;
    console.log(noOfSquares)
    gridCreation();
});
