let stage = document.querySelector("#stage");

const SIZE = 30;

let array = [
  [1,1,1,1],
  [1,0,0,0],
  [1,1,1,1],
  [1,0,0,0],
  [1,1,1,1]
];

const ROWS = array.length;
const COLUMNS = array[0].length;

for(row = 0; row < ROWS; row++){
  for(column = 0; column < COLUMNS; column++){
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    stage.appendChild(cell);

    if(array[row][column] === 1){
      cell.style.backgroundColor = "black";
    }

    cell.style.top = `${row * SIZE}px`;
    cell.style.left = `${column * SIZE}px`;
  }
}