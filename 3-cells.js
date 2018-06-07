class Cells {

  constructor(i,j){

    this.i = i;
    this.j = j;
    this.x = i*scl;
    this.y = j*scl;

    this.pawnB = false;
    this.rookB = false;
    this.knightB = false;
    this.bishopB = false;
    this.queenB = false;
    this.kingB = false;

    this.pawnW = false;
    this.rookW = false;
    this.knightW = false;
    this.bishopW = false;
    this.queenW = false;
    this.kingW = false;

    this.toHighlight = false;

  }

  showPattern1(){

    fill(255,212,128);
    noStroke();
    rect(this.x, this.y, scl, scl)

  }

  showPattern2(){

    fill(204,136,0);
    noStroke();
    rect(this.x, this.y, scl, scl)

  }

  highlight(){

    if(this.toHighlight){

      fill(0,255,0,127);
      noStroke();
      rect(this.x, this.y, scl, scl)

    }

  }

}
