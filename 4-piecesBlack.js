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


    var jp1 = constrain(this.j+1 ,0,grid.length-1);
    var jp2 = constrain(this.j+2 ,0,grid.length-1);

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
