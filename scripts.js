//pseudocode for making etch a sketch grid
//create contianer div
//create row div 
//make square and append to each row by given amount
//append as many rows as needed

let rows = 16;
let columns = 16;
const container = document.createElement('div');
container.setAttribute('id','container')
// container.textContent = 'sup';

document.body.appendChild(container);

for (i=0; i<rows; i++){
    const row = document.createElement('div');
    row.classList.add("row", `row.${i+1}`);
    for (j=0; j<columns; j++){

        const square = document.createElement('div');
        square.textContent= 's';
        square.classList.add("square", `column${j+1}`, `row${j+1}`)
        row.appendChild(square);
    }
    container.appendChild(row);
}

