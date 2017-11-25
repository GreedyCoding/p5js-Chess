// Variables for colums and rows
var cols;
var rows;
// Variable for the 2D Array
var grid;
// Variable for scaling the cells and scaling x and y locations for the pieces
var scl = 100;
// Array for images
var imgB = [];
var imgW = [];
// Array for pieces
var pieces = [];


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

  colourizeCells();
  renderPieces();
  showHighlights();

}
