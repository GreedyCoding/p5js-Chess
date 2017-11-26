class PawnB {

  constructor(i,j, img){

    this.i = i;
    this.j = j;
    this.x = i*scl+50;
    this.y = j*scl+50;
    this.img = img;
    this.firstClick = false;
    this.firstMove = true;

  }

  show(){

    imageMode(CENTER);
    image(this.img, this.x, this.y);

  }

  clickedOn(){

    var distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < 50 && !this.firstClick){
      this.firstClick = true;
    } else if (distance < 50 && this.firstClick){
      this.firstClick = false;
    }

  }

  highlight(){

    if (this.firstClick && this.firstMove){
      grid[this.i][this.j+1].toHighlight = true;
      grid[this.i][this.j+2].toHighlight = true;
    } else if (!this.firstClick && this.firstMove) {
      grid[this.i][this.j+1].toHighlight = false;
      grid[this.i][this.j+2].toHighlight = false;
    } else if (this.firtClick && !this.firstMove){
      grid[this.i][this.j+1].toHighlight = true;
      grid[this.i][this.j+2].toHighlight = false;
    } else if (!this.firstClick && !this.firstMove){
      grid[this.i][this.j+1].toHighlight = false;
      grid[this.i][this.j+2].toHighlight = false;
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
