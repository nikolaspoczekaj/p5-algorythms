
const ROWS = 50;
const COLS = 80;
var grid;

function setup(){
  createCanvas(800,500);
  background(240);

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

  grid = makeGrid();
  grid = fillGridRandom(grid);
}

function draw(){
  for ( let i=0; i < ROWS; i++ ) {
    for ( let j=0; j < COLS; j++ ) {

      if(grid[i][j] === 1){
        fill(51, 204, 51);
        ellipse((j*(height/ROWS)+(height/ROWS/2)), (i*(width/COLS)+(width/COLS/2)), (height/ROWS/2));
      }
    }
  }
  return grid;
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