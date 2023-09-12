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

for (i=0; i<columns; i++){
    const column = document.createElement('div');
    column.classList.add("column", `col.${i+1}`);
    for (j=0; j<rows; j++){

        const square = document.createElement('div');
        square.classList.add("square", `row${j+1}`, `col${i+1}`)
        column.appendChild(square);
        
    }
    container.appendChild(column);
}

document.querySelectorAll(".square").forEach(item=>{item.addEventListener("mouseover", () => item.style.backgroundColor='rgb(' + randomRGBNum() + ',' + randomRGBNum() + ',' + randomRGBNum() + ')')});

function randomRGBNum() {
    let num = Math.floor(Math.random()*256);
    return num;
}

// function randomColor() {
//     const bgColor = [(randomRGBNum()),(randomRGBNum()),(randomRGBNum())];
//     return bgColor;
// }

// function changeBGColor() {
//     item.style.backgroundColor='rgb(' + randomRGBNum() + ',' + randomRGBNum() + ',' + randomRGBNum() + ')';
// }