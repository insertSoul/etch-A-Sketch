
// ############# Etch-a-sketch pseudo code #########

// Creating the grid of divs
    // make a single sized square to replicate in css
// Container to hold grid in -- might need to make as a flexbox to contain girdelements
    // repeat 16 across (row)
        // repeat that row down 16 (loop in loop) (column)
            //(make 16 a changeable variable to make custom grid?)
            // would need to adjust size of squares so it would fit in total space
            //(squareLength = containerLength/num of squares)
    


// querySelectAll girdSquares
// onHover change attribute of background color (addEventListener('hoover'))
    //Could add to color value to give grayscale addition where multiple movements across grid would darken 

// Need to create a way for clearing the grid
// this is where we could implement the ability to change grid size


const gridContainer = document.querySelector('.gridContainer')

function makeGrid (numOfGridColumns = 16, numOfGridRows = 16) {
    for (let i=0; i < numOfGridColumns; i++) {
        const gridSquareColunm = document.createElement('div');
        gridSquareColunm.className= 'gridColunm';
        gridContainer.appendChild(gridSquareColunm);
        for (let j=0; j < numOfGridRows; j++) {
            const gridSquareRow = document.createElement('div');
            gridSquareRow.className= 'gridSquare';
            gridSquareColunm.appendChild(gridSquareRow);
        }
    }
    scaleGridSize(numOfGridColumns, numOfGridRows);
    drawOnGrid();
}

function makeCustomGrid() {
    removeLastGrid();
    const newNumOfColumns = prompt('Set a new Width');
    const newNumOfRows = prompt('set a new Height');
    makeGrid(newNumOfColumns, newNumOfRows);
    allGridSquares = document.querySelectorAll('.gridSquare');
}

function removeLastGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function scaleGridSize (numOfGridColumns, numOfGridRows) {
    gridSquareWidth = (700 / numOfGridColumns);
    gridSquareHeight = (700 / numOfGridRows);
    let allGridSquares = document.querySelectorAll('.gridSquare');
    allGridSquares.forEach((gridSquare) => {
        gridSquare.style.width = `${gridSquareWidth}px`
        gridSquare.style.height = `${gridSquareHeight}px`
    });
  
}

function colorSelected (element) {
    newColor = element.value
    drawOnGrid(newColor)
}

function drawOnGrid(color = "black") {
    let allGridSquares = document.querySelectorAll('.gridSquare');
    allGridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = color;
            console.log('test')
        });
    });
}

function createRandomGrid() {
    removeLastGrid();
    let randomColumn = Math.floor(Math.random() * 99 + 1);
    let randomRow = Math.floor(Math.random() * 99 + 1);
    scaleGridSize()
    makeGrid(randomColumn, randomRow);
    allGridSquares = document.querySelectorAll('.gridSquare');

}
function removeGridLines() {
    let allGridSquares = document.querySelectorAll('.gridSquare');
    allGridSquares.forEach((gridSquare) => {
        gridSquare.classList.toggle('gridSquareNoBorder')
        console.log('secondTest')
    });
}

makeGrid(16, 16);

const gridSizeButton = document.querySelector('.gridSizeButton')
gridSizeButton.addEventListener('click', makeCustomGrid)


const removeGrid = document.querySelector('.removeGrid')
removeGrid.addEventListener('click', removeGridLines)


let allGridSquares = document.querySelectorAll('.gridSquare');
const resetGrid = document.querySelector('.resetGrid')
resetGrid.addEventListener('click', () => {
    allGridSquares.forEach((gridSquare) => {
        gridSquare.style.backgroundColor = "white";
    });
});

const randomButton = document.querySelector('.randomGridButton')
randomButton.addEventListener('click', createRandomGrid)


/*
  let allGridSquares = document.getElementsByClassName('gridSquare');
    allGridSquares.forEach((gridSquare) => {
        gridSquare.setAttribute("style", `width:${gridSquareWidth};  height:${gridSquareHeight}`)
    });

    */
