function make2DArray(cols,rows){

  grid = new Array(cols);
    for (var i = 0;i < grid.length; i++){
      grid[i] = new Array(rows);
    }

}

function init2DArray(){

  var maxcolumn = grid.length;
  for(_columns = 0; _columns < maxcolumn; _columns++){
    maxrows = grid[_columns].length;

    for(_rows = 0; _rows < maxrows; _rows++){
      grid[_columns][_rows] = new Cells(_columns,_rows);
    }
  }

}

function containsNot(array, object) {

    for (let index1 = 0; index1 < array.length; index1++) {
      if (array[index1] === object) {
        return false;
      }
    }
    return true;
}

function mouseClicked(){

  for (var _pieces = 0; _pieces < pieces.length; _pieces++){
    pieces[_pieces].clickedOn();
  }

}

function colourizeCells(){

  var firstBlack;
  var Modulo = 2;

  grid.forEach(function(_columns,_columnindex){

    if(_columnindex % Modulo == 0){

      firstBlack = true;

    } else {

      firstBlack = false;

    }

    _columns.forEach(function(_rows, _index){


      if(firstBlack){

        if(_index % Modulo == 0){
          _rows.showPattern2();
        }  else {
          _rows.showPattern1()
        }

      } else {

        if(_index % Modulo == 0){
          _rows.showPattern1();
        }  else {
          _rows.showPattern2()
        }

      }

    })
  })

}

function highlights(){

  for (var i1 = 0; i1 < grid.length; i1++){
    for (var i2 = 0; i2 < grid[i1].length; i2++){
      grid[i1][i2].highlight();
      grid[i1][i2].statusUpdate();
    }
  }

}

function renderPieces(){

  for (var i = 0; i < pieces.length; i++){
    pieces[i].show();
    pieces[i].highlight();
  }

}

function setStartPos(){

  for (var i1 = 0; i1 < grid.length; i1++){
    for (var i2 = 0; i2 < grid[i1].length; i2++){

      grid[i1][i2].pawnB = false
      grid[i1][i2].rookB = false;
      grid[i1][i2].knightB = false;
      grid[i1][i2].bishopB = false;
      grid[i1][i2].queenB = false;
      grid[i1][i2].kingB = false;
      grid[i1][i2].pawnW = false;
      grid[i1][i2].rookW = false;
      grid[i1][i2].knightW = false;
      grid[i1][i2].bishopW = false;
      grid[i1][i2].queenW = false;
      grid[i1][i2].kingW = false;

    }
  }

  grid[0][1].pawnB = true;
  grid[1][1].pawnB = true;
  grid[2][1].pawnB = true;
  grid[3][1].pawnB = true;
  grid[4][1].pawnB = true;
  grid[5][1].pawnB = true;
  grid[6][1].pawnB = true;
  grid[7][1].pawnB = true;

  grid[0][0].rookB = true;
  grid[7][0].rookB = true;

  grid[1][0].knightB = true;
  grid[6][0].knightB = true;

  grid[2][0].bishopB = true;
  grid[5][0].bishopB = true;

  grid[3][0].queenB = true;

  grid[4][0].kingB = true;

  grid[0][6].pawnW = true;
  grid[1][6].pawnW = true;
  grid[2][6].pawnW = true;
  grid[3][6].pawnW = true;
  grid[4][6].pawnW = true;
  grid[5][6].pawnW = true;
  grid[6][6].pawnW = true;
  grid[7][6].pawnW = true;

  grid[0][7].rookW = true;
  grid[7][7].rookW = true;

  grid[1][7].knightW = true;
  grid[6][7].knightW = true;

  grid[2][7].bishopW = true;
  grid[5][7].bishopW = true;

  grid[3][7].queenW = true;

  grid[4][7].kingW = true;

}


function createPieces(){

  for (var i1 = 0; i1 < grid.length; i1++){
    for (var i2 = 0; i2 < grid[i1].length; i2++){

      if (grid[i1][i2].pawnB){

        var pawnB = new PawnB(grid[i1][i2].i, grid[i1][i2].j, imgB[0]);
        pieces.push(pawnB);

      } else if (grid[i1][i2].rookB) {

        var rookB = new RookB(grid[i1][i2].i, grid[i1][i2].j, imgB[1])
        pieces.push(rookB);

      } else if (grid[i1][i2].knightB) {

        var knightB = new KnightB(grid[i1][i2].i, grid[i1][i2].j, imgB[2])
        pieces.push(knightB);

      } else if (grid[i1][i2].bishopB) {

        var bishopB = new BishopB(grid[i1][i2].i, grid[i1][i2].j, imgB[3])
        pieces.push(bishopB);

      } else if (grid[i1][i2].queenB) {

        var queenB = new QueenB(grid[i1][i2].i, grid[i1][i2].j, imgB[4])
        pieces.push(queenB);

      } else if (grid[i1][i2].kingB) {

        var kingB = new KingB(grid[i1][i2].i, grid[i1][i2].j, imgB[5])
        pieces.push(kingB);

      } else if (grid[i1][i2].pawnW) {

        var pawnW = new PawnW(grid[i1][i2].i, grid[i1][i2].j, imgW[0])
        pieces.push(pawnW);

      } else if (grid[i1][i2].rookW) {

        var rookW = new RookW(grid[i1][i2].i, grid[i1][i2].j, imgW[1])
        pieces.push(rookW);

      } else if (grid[i1][i2].knightW) {

        var knightW = new KnightW(grid[i1][i2].i, grid[i1][i2].j, imgW[2])
        pieces.push(knightW);

      } else if (grid[i1][i2].bishopW) {

        var bishopW = new BishopW(grid[i1][i2].i, grid[i1][i2].j, imgW[3])
        pieces.push(bishopW);

      } else if (grid[i1][i2].queenW) {

        var queenW = new QueenW(grid[i1][i2].i, grid[i1][i2].j, imgW[4])
        pieces.push(queenW);

      } else if (grid[i1][i2].kingW) {

        var kingW = new KingW(grid[i1][i2].i, grid[i1][i2].j, imgW[5])
        pieces.push(kingW);

      }

    }
  }

}
