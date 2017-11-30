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

    for (let i1 = 0; i1 < grid.length; i1++){
      for (let i2 = 0; i2 < grid[i1].length; i2++){
        if (containsNot(moves, grid[i1][i2]) && grid[i1][i2].toHighlight){
          moves.push(grid[i1][i2]);
        }
      }
    }

  }

  move(){

    for (let i = 0; i < pieces.length; i++){
      if (pieces[i].firstClick){
        clickedPiece = pieces[i];
      }
    }

    for (let i = 0; i < moves.length; i++){
      let distance = dist(mouseX, mouseY, moves[i].i*scl, moves[i].j*scl);
      if (distance < 100){
        clickedPiece.i = moves[i].i;
        clickedPiece.j = moves[i].j;
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
