
// ############# Etch-a-sketch pseudo code #########

// Creating the grid of divs
    // make a single sized square to replicate in css
// Container to hold grid in -- might need to make as a flexbox to contain girdelements
    // repeat 16 across (row)
        // repeat that row down 16 (loop in loop) (column)
            //(make 16 a changeable variable to make custom grid?)
            // would need to adjust size of squares so it would fit in total space
    


// querySelectAll girdSquares
// onHover change attribute of background color (addEventListener('hoover'))
    //Could add to color value to give grayscale addition where multiple movements across grid would darken 

// Need to create a way for clearing the grid
// this is where we could implement the ability to change grid size
const girdContainer = document.querySelector('.gridContainer')
function makeGrid () {
    for (let i=0; i < 16; i++) {
        const gridSquareColunm = document.createElement('div');
        //gridSquareColunm.className = 'gridSquare'
        girdContainer.appendChild(gridSquareColunm);
        for (let j=1; j < 16; j++) {
            const gridSquareRow = document.createElement('div');
            gridSquareRow.className= 'gridSquare'
            gridSquareColunm.appendChild(gridSquareRow);
        }
    }
}

makeGrid();