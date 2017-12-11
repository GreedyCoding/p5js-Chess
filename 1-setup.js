// Variables for colums and rows
let cols;
let rows;
// Variable for the 2D Array
let grid;
// Variable for scaling the cells and scaling x and y locations for the pieces
let scl = 100;
// Array for images
let imgB = [];
let imgW = [];
// Array for pieces
let pieces = [];
// Array for possible Moves
let moves = [];
// Variable for currently clicked Piece
let clickedPiece;
// Variables for Buttons
let restartButton;


function setup(){


  createCanvas(800,800);
  createDomElements();
  cols = floor(width/scl);
  rows = floor(height/scl);
  make2DArray(cols,rows);
  init2DArray();
  setStartPos();
  createPieces();

}

function draw(){

//Colourizing all the Cells
  colourizeCells();
  renderPieces();
  highlights();

}
