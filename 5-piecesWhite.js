class PawnW extends PawnB {

    constructor(i,j, img){

      super(i,j,img);

    }

    highlight(){

      var x = this.i*scl;
      var y1 = (this.j-1)*scl;
      var y2 = (this.j-2)*scl;


      if (this.firstClick && this.firstMove){

        noStroke();
        fill(0,255,0,127)
        rect(x, y1, scl, scl)
        rect(x, y2, scl, scl);

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
