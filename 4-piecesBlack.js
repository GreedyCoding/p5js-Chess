class PawnB {

  constructor(i,j, img){

    this.i = i;
    this.j = j;
    this.x = this.i*scl+50;
    this.y = this.j*scl+50;
    this.img = img;
    this.firstClick = false;
    this.firstMove = true;

  }

  show(){

    imageMode(CENTER);
    image(this.img, this.x, this.y);

  }

  update(){

    this.x = this.i*scl+50;
    this.y = this.j*scl+50;

  }

  clickedOn(){

    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < 50 && !this.firstClick){
      this.firstClick = true;
    } else if (distance < 50 && this.firstClick){
      this.firstClick = false;
    }

  }

  highlight(){


    let jp1 = constrain(this.j+1 ,0,grid.length-1);
    let jp2 = constrain(this.j+2 ,0,grid.length-1);

    if (this.firstClick && this.firstMove){
      grid[this.i][jp1].toHighlight = true;
      grid[this.i][jp2].toHighlight = true;
    } else if (!this.firstClick && this.firstMove){
      grid[this.i][jp1].toHighlight = false;
      grid[this.i][jp2].toHighlight = false;
    } else if (this.firstClick && !this.firstMove){
      grid[this.i][jp1].toHighlight = true;
      grid[this.i][jp2].toHighlight = false;
    } else if (!this.firstClick && !this.firstMove){
      grid[this.i][jp1].toHighlight = false;
      grid[this.i][jp2].toHighlight = false;
    }

    for (let index1 = 0; index1 < grid.length; index1++){
      for (let index2 = 0; index2 < grid[index1].length; index2++){
        if (containsNot(moves, grid[index1][index2]) && grid[index1][index2].toHighlight){
          moves.push(grid[index1][index2]);
        }
      }
    }

  }

  move(){

    for (let index = 0; index < pieces.length; index++){
      if (pieces[index].firstClick){
        clickedPiece = pieces[index];
      }
    }

    for (let index = 0; index < moves.length; index++){
      let distance = dist(mouseX, mouseY, moves[index].i*scl, moves[index].j*scl);
      if (distance < 100){
        clickedPiece.i = moves[index].i;
        clickedPiece.j = moves[index].j;
        clickedPiece.firstMove = false;
        clickedPiece.firstClick = false;
        unsetHighlights();
        moves.length = 0;

      }
    }


  }

}

class RookB extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}

class KnightB extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}

class BishopB extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}

class QueenB extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}

class KingB extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}
