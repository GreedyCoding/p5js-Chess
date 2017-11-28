class Cells {

  constructor(i,j){

    this.i = i;
    this.j = j;

    this.blackPiece = false;
    this.whitePiece = false;

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

  statusUpdate(){

    if (this.pawnB || this.rookB || this.knightB || this.bishopB || this.queenB || this.kingB){
      this.blackPiece = true;
    } else {
      this.blackPiece = false;
    }

    if (this.pawnW || this.rookW || this.knightW || this.bishopW || this.queenW || this.kingW){
      this.whitePiece = true;
    } else {
      this.whitePiece = false;
    }

  }

}
