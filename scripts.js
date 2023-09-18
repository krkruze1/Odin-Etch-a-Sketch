//pseudocode for making etch a sketch grid
//create contianer div
//create row div 
//make square and append to each row by given amount
//append as many rows as needed

let rows = 16;
let columns = 16;

const container0 = document.createElement('div');
container0.setAttribute('id','container0');
const container2 = document.createElement('div');
container2.setAttribute('id','container2');
const container1= document.createElement('div');
container1.setAttribute('id','container1');
document.body.appendChild(container0);
document.body.appendChild(container1);
document.body.appendChild(container2);

document.onload = createBoard();

function createBoard() {
    for (i=0; i<columns; i++){
        const column = document.createElement('div');
        column.classList.add("column", `col.${i+1}`);
        for (j=0; j<rows; j++){

            const square = document.createElement('div');
            square.classList.add("square", `row${j+1}`, `col${i+1}`)
            column.appendChild(square);
        }
        container2.appendChild(column);
    }
    document.querySelectorAll(".square").forEach(item=>{item.addEventListener("mouseover", () => item.style.backgroundColor='rgb(' + randomRGBNum() + ',' + randomRGBNum() + ',' + randomRGBNum() + ')')});
}

const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset');
resetButton.textContent = 'RESET';
resetButton.style.backgroundColor = 'Coral';
resetButton.style.color = 'navy';
resetButton.style.borderColor = 'red';
resetButton.style.padding = '16px';
resetButton.style.marginTop = '8px';
resetButton.addEventListener('click', resetBoard)
container1.appendChild(resetButton);

const resizeButton = document.createElement('button');
resizeButton.setAttribute('id', 'resize');
resizeButton.textContent = 'CHANGE GRID';
resizeButton.style.backgroundColor = 'Navy';
resizeButton.style.color = 'coral';
resizeButton.style.borderColor = 'bronze';
resizeButton.style.padding = '16px';
resizeButton.addEventListener('click', resizeBoard)
container0.appendChild(resizeButton);



function randomRGBNum() {
    let num = Math.floor(Math.random()*256);
    return num;
}

function resetBoard () {
    document.querySelectorAll(".square").forEach(item => {item.style.backgroundColor= 'bisque'});
}

function resizeBoard() {
    rows = prompt();
    if (rows > 100) {
        alert('No more than 100, please');
        rows = prompt();
    };
    columns = rows;
    container2.querySelectorAll('.column').forEach(item => {item.parentNode.removeChild(item)});
    createBoard();
}