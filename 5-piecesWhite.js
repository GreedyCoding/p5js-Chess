class PawnW extends PawnB {

    constructor(i,j, img){

      super(i,j,img);

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


class RookW extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}

class KnightW extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}

class BishopW extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}

class QueenW extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}

class KingW extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

}
