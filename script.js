
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

function makeGrid (numOfGridRows = 16, numOfGridColumns = 16) {
    for (let i=0; i < numOfGridRows; i++) {
        const gridSquareColunm = document.createElement('div');
        gridSquareColunm.className= 'gridColunm'
        gridContainer.appendChild(gridSquareColunm);
        for (let j=0; j < numOfGridColumns; j++) {
            const gridSquareRow = document.createElement('div');
            gridSquareRow.className= 'gridSquare'
            gridSquareColunm.appendChild(gridSquareRow);
            //document.getElementsByClassName('gridSquare').setAttribute("style", "width:", "height:")
        }
    }
    drawOnGrid();
}

function makeCustomGrid() {
    RemoveLastGrid();
    const newNumOfRows = prompt('Set a new Width');
    const newNumOfColumns = prompt('set a new Height');
    makeGrid(newNumOfRows, newNumOfColumns);
    allGridSquares = document.querySelectorAll('.gridSquare');
}

function RemoveLastGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

makeGrid(16, 16);

//Static nodeList problem, work out how to make live
function drawOnGrid() {
    let allGridSquares = document.querySelectorAll('.gridSquare');
    allGridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = "black";
            console.log('test')
        });
    });
}


const gridSizeButton = document.querySelector('.gridSizeButton')
gridSizeButton.addEventListener('click', makeCustomGrid)