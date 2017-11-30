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


function setup(){

  createCanvas(800,800);
// Creating colums and rows
  cols = floor(width/scl);
  rows = floor(height/scl);
// Making and the 2D Array
  make2DArray(cols,rows);
// Creating Cells in every Spot of the Array
  init2DArray();
// Setting the Pieces to their Starting Position
  setStartPos();
// Creating all the Pieces
  createPieces();

}


function draw(){

//Colourizing all the Cells
  colourizeCells();
  renderPieces();
  highlights();

}
