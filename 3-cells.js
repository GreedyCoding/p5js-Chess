class Cells {

  constructor(i,j){

    this.i = i;
    this.j = j;

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

    this.toHighlight = Boolean(false);

  }

  showPattern1(){

    var x = this.i*scl;
    var y = this.j*scl;
    fill(255,212,128);
    noStroke();
    rect(x, y, scl, scl)

  }

  showPattern2(){

    var x = this.i*scl;
    var y = this.j*scl;
    fill(204,136,0);
    noStroke();
    rect(x, y, scl, scl)

  }

  highlight(){

    if(this.toHighlight){

      var x = this.i*scl;
      var y = this.j*scl;
      fill(0,255,0,127);
      noStroke();
      rect(x, y, scl, scl)

    }

  }


}
