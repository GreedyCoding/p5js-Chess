// Variable for Canvas
let canvas;
// Variable for Cols, Rows and the 2D Array
let cols;
let rows;
let grid;
// Scale for the Cells
let scl = 100;
// Arrays
let imgB = [];
let imgW = [];
let pieces = [];
let moves = [];
// Variable for currently Clicked Piece
let clickedPiece;
// Variables for Buttons
let restartButton;
// jQuery get Window Width
let pageWidth = $( window ).width();


function setup(){

  canvas = createCanvas(800,800);
  canvas.position((pageWidth/2)-400,30);
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
