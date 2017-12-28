class PawnB {

  constructor(i,j, img){

    this.i = i;
    this.j = j;
    this.color = false;
    this.x = i*scl;
    this.y = j*scl;
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

    let edgeX = this.x - 50;
    let edgeY = this.y - 50;

    if (mouseX > edgeX && mouseX < edgeX + scl && mouseY > edgeY && mouseY < edgeY + scl && !this.firstClick){
      this.firstClick = true;
    } else if (mouseX > edgeX && mouseX < edgeX + scl && mouseY > edgeY && mouseY < edgeY + scl && this.firstClick){
      this.firstClick = false;
    }

    // let distance = dist(mouseX, mouseY, this.x, this.y);
    // if (distance < 50 && !this.firstClick){
    //   this.firstClick = true;
    // } else if (distance < 50 && this.firstClick){
    //   this.firstClick = false;
    // }

  }

  checkPawnCaptures(){

    

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
        moves.length = null;
        clickedPiece = null;
      }
    }

  }

  captured(){

    for (var i = 0; i < pieces.length; i++){
      if (this.i === pieces[i].i && this.j === pieces[i].j){
        pieces.splice(i, 1);
      }
    }

  }

}

class RookB extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

  highlight(){

    let ip1 = constrain(this.i+1 ,0,grid.length-1);
    let ip2 = constrain(this.i+2 ,0,grid.length-1);
    let ip3 = constrain(this.i+3 ,0,grid.length-1);
    let ip4 = constrain(this.i+4 ,0,grid.length-1);
    let ip5 = constrain(this.i+5 ,0,grid.length-1);
    let ip6 = constrain(this.i+6 ,0,grid.length-1);
    let ip7 = constrain(this.i+7 ,0,grid.length-1);

    let im1 = constrain(this.i-1 ,0,grid.length-1);
    let im2 = constrain(this.i-2 ,0,grid.length-1);
    let im3 = constrain(this.i-3 ,0,grid.length-1);
    let im4 = constrain(this.i-4 ,0,grid.length-1);
    let im5 = constrain(this.i-5 ,0,grid.length-1);
    let im6 = constrain(this.i-6 ,0,grid.length-1);
    let im7 = constrain(this.i-7 ,0,grid.length-1);

    let jp1 = constrain(this.j+1 ,0,grid.length-1);
    let jp2 = constrain(this.j+2 ,0,grid.length-1);
    let jp3 = constrain(this.j+3 ,0,grid.length-1);
    let jp4 = constrain(this.j+4 ,0,grid.length-1);
    let jp5 = constrain(this.j+5 ,0,grid.length-1);
    let jp6 = constrain(this.j+6 ,0,grid.length-1);
    let jp7 = constrain(this.j+7 ,0,grid.length-1);

    let jm1 = constrain(this.j-1 ,0,grid.length-1);
    let jm2 = constrain(this.j-2 ,0,grid.length-1);
    let jm3 = constrain(this.j-3 ,0,grid.length-1);
    let jm4 = constrain(this.j-4 ,0,grid.length-1);
    let jm5 = constrain(this.j-5 ,0,grid.length-1);
    let jm6 = constrain(this.j-6 ,0,grid.length-1);
    let jm7 = constrain(this.j-7 ,0,grid.length-1);

    if (this.firstClick){

      grid[this.i][jp1].toHighlight = true;
      grid[this.i][jp2].toHighlight = true;
      grid[this.i][jp3].toHighlight = true;
      grid[this.i][jp4].toHighlight = true;
      grid[this.i][jp5].toHighlight = true;
      grid[this.i][jp6].toHighlight = true;
      grid[this.i][jp7].toHighlight = true;

      grid[this.i][jm1].toHighlight = true;
      grid[this.i][jm2].toHighlight = true;
      grid[this.i][jm3].toHighlight = true;
      grid[this.i][jm4].toHighlight = true;
      grid[this.i][jm5].toHighlight = true;
      grid[this.i][jm6].toHighlight = true;
      grid[this.i][jm7].toHighlight = true;

      grid[ip1][this.j].toHighlight = true;
      grid[ip2][this.j].toHighlight = true;
      grid[ip3][this.j].toHighlight = true;
      grid[ip4][this.j].toHighlight = true;
      grid[ip5][this.j].toHighlight = true;
      grid[ip6][this.j].toHighlight = true;
      grid[ip7][this.j].toHighlight = true;

      grid[im1][this.j].toHighlight = true;
      grid[im2][this.j].toHighlight = true;
      grid[im3][this.j].toHighlight = true;
      grid[im4][this.j].toHighlight = true;
      grid[im5][this.j].toHighlight = true;
      grid[im6][this.j].toHighlight = true;
      grid[im7][this.j].toHighlight = true;

    } else if (!this.firstClick){

      grid[this.i][jp1].toHighlight = false;
      grid[this.i][jp2].toHighlight = false;
      grid[this.i][jp3].toHighlight = false;
      grid[this.i][jp4].toHighlight = false;
      grid[this.i][jp5].toHighlight = false;
      grid[this.i][jp6].toHighlight = false;
      grid[this.i][jp7].toHighlight = false;

      grid[this.i][jm1].toHighlight = false;
      grid[this.i][jm2].toHighlight = false;
      grid[this.i][jm3].toHighlight = false;
      grid[this.i][jm4].toHighlight = false;
      grid[this.i][jm5].toHighlight = false;
      grid[this.i][jm6].toHighlight = false;
      grid[this.i][jm7].toHighlight = false;

      grid[ip1][this.j].toHighlight = false;
      grid[ip2][this.j].toHighlight = false;
      grid[ip3][this.j].toHighlight = false;
      grid[ip4][this.j].toHighlight = false;
      grid[ip5][this.j].toHighlight = false;
      grid[ip6][this.j].toHighlight = false;
      grid[ip7][this.j].toHighlight = false;

      grid[im1][this.j].toHighlight = false;
      grid[im2][this.j].toHighlight = false;
      grid[im3][this.j].toHighlight = false;
      grid[im4][this.j].toHighlight = false;
      grid[im5][this.j].toHighlight = false;
      grid[im6][this.j].toHighlight = false;
      grid[im7][this.j].toHighlight = false;

    }

    for (let i1 = 0; i1 < grid.length; i1++){
      for (let i2 = 0; i2 < grid[i1].length; i2++){
        if (containsNot(moves, grid[i1][i2]) && grid[i1][i2].toHighlight){
          moves.push(grid[i1][i2]);
        }
      }
    }

  }

}

class KnightB extends PawnB {

  constructor(i,j, img){

    super(i,j,img);

  }

  highlight(){

    let ip1 = constrain(this.i+1 ,0,grid.length-1);
    let ip2 = constrain(this.i+2 ,0,grid.length-1);

    let im1 = constrain(this.i-1 ,0,grid.length-1);
    let im2 = constrain(this.i-2 ,0,grid.length-1);

    let jp1 = constrain(this.j+1 ,0,grid.length-1);
    let jp2 = constrain(this.j+2 ,0,grid.length-1);

    let jm1 = constrain(this.j-1 ,0,grid.length-1);
    let jm2 = constrain(this.j-2 ,0,grid.length-1);

    if (this.firstClick){

      grid[im1][jm2].toHighlight = true;
      grid[ip1][jm2].toHighlight = true;
      grid[im1][jp2].toHighlight = true;
      grid[ip1][jp2].toHighlight = true;
      grid[im2][jm1].toHighlight = true;
      grid[im2][jp1].toHighlight = true;
      grid[ip2][jm1].toHighlight = true;
      grid[ip2][jp1].toHighlight = true;

    } else if (!this.firstClick){

      grid[im1][jm2].toHighlight = false;
      grid[ip1][jm2].toHighlight = false;
      grid[im1][jp2].toHighlight = false;
      grid[ip2][jp2].toHighlight = false;
      grid[ip2][jm1].toHighlight = false;
      grid[ip2][jp1].toHighlight = false;
      grid[ip1][jm1].toHighlight = false;
      grid[ip1][jp1].toHighlight = false;

    }

    for (let i1 = 0; i1 < grid.length; i1++){
      for (let i2 = 0; i2 < grid[i1].length; i2++){
        if (containsNot(moves, grid[i1][i2]) && grid[i1][i2].toHighlight){
          moves.push(grid[i1][i2]);
        }
      }
    }

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
