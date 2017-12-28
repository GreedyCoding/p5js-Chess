class PawnW extends PawnB {

    constructor(i,j, img){

      super(i,j,img);
      this.color = true;

    }

    highlight(){


      let jm1 = constrain(this.j-1 ,0,grid.length-1);
      let jm2 = constrain(this.j-2 ,0,grid.length-1);

      if (this.firstClick && this.firstMove){
        grid[this.i][jm1].toHighlight = true;
        grid[this.i][jm2].toHighlight = true;
      } else if (!this.firstClick && this.firstMove){
        grid[this.i][jm1].toHighlight = false;
        grid[this.i][jm2].toHighlight = false;
      } else if (this.firstClick && !this.firstMove){
        grid[this.i][jm1].toHighlight = true;
        grid[this.i][jm2].toHighlight = false;
      } else if (!this.firstClick && !this.firstMove){
        grid[this.i][jm1].toHighlight = false;
        grid[this.i][jm2].toHighlight = false;
      }

    }

  }


class RookW extends RookB {

  constructor(i,j, img){

    super(i,j,img);
    this.color = true;

  }

}

class KnightW extends KnightB {

  constructor(i,j, img){

    super(i,j,img);
    this.color = true;

  }

}

class BishopW extends BishopB {

  constructor(i,j, img){

    super(i,j,img);
    this.color = true;

  }

}

class QueenW extends QueenB {

  constructor(i,j, img){

    super(i,j,img);
    this.color = true;

  }

}

class KingW extends KingB {

  constructor(i,j, img){

    super(i,j,img);
    this.color = true;

  }

}
