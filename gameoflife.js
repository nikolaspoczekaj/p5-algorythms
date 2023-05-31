const TIMEBETWEENGENS = 100;
const ROWS = 50;
const COLS = 80;
var grid;
var next;

function setup(){
  createCanvas(800,500);
  background(240);
  noLoop();
  

  grid = makeGrid();
  grid = fillGridRandom(grid);
}

function draw(){
  
  
    clear();
    line(1,1,width,1);
    line(1,1,1,height);
    line(1,height-1,width-1,height-1);
    line(width-1,1,width-1,height-1);

    for (var x = 0; x < width; x += width / COLS) {
      for (var y = 0; y < height; y += height / ROWS) {
        stroke(200);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }

    for ( let i=0; i < ROWS; i++ ) {
      for ( let j=0; j < COLS; j++ ) {

        if(grid[i][j] === 1){
          fill(51, 204, 51);
          point((j*(height/ROWS)+(height/ROWS/2)), (i*(width/COLS)+(width/COLS/2)));
          stroke('green');
          strokeWeight(7);
        }
      }
    }

    next = makeGrid();

    for ( let i=0; i < ROWS; i++ ) {
      for ( let j=0; j < COLS; j++ ) {
        
        let neighbours = countNeighbours(grid,i,j);

        if(grid[i][j] === 0){
          if(neighbours === 3){
            next[i][j] = 1;
          }else{
            next[i][j] = 0;
          }
        }

        if(grid[i][j] === 1){
          if(neighbours < 2){
            next[i][j] = 0;
          }else if(neighbours === 2 || neighbours === 3){
            next[i][j] = 1;
          }else if(neighbours > 3){
            next[i][j] = 0;
          }
        }

      }
    }

    grid = next;
  
  
    setTimeout(function() {
      redraw();
    }, TIMEBETWEENGENS);
  
}

function makeGrid(){
  let gridArray = new Array(ROWS);
  for ( let i=0; i < gridArray.length; i++ ) {
    gridArray[i] = new Array(COLS);
  }
  return gridArray;
}

function fillGridRandom(grid){
  for ( let i=0; i < ROWS; i++ ) {
    for ( let j=0; j < COLS; j++ ) {

      grid[i][j] = floor(random(2));
    }
  }
  return grid;
}

function countNeighbours(grid,i,j){
  let sum = 0;
  try{
    sum+=grid[i-1][j-1];
  }catch{}
  try{
    sum+=grid[i-1][j];
  }catch{}
  try{
    sum+=grid[i-1][j+1];
  }catch{}
  try{
    sum+=grid[i][j-1];
  }catch{}
  try{
    sum+=grid[i][j+1];
  }catch{}
  try{
    sum+=grid[i+1][j-1];
  }catch{}
  try{
    sum+=grid[i+1][j];
  }catch{}
  try{
    sum+=grid[i+1][j+1];
  }catch{}
  return sum;
}

function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}