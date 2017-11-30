# p5js-Chess

Chess game by GreedyCoding using the p5js library



 Current Features
 - Rendering the Gameboard.
 - Creating all the Chesspieces using inheritance.
 - Following logic is working for the Game:
   - Pawns are able to be clicked on and show the possible moves for them.
   - Pawns can make the first Moves
   - Pawns can fully move across the board

  Current Bugs
  - After moving Pawns available moves won´t get highlighted at all. Pieces are able to move further though.


# Changelog 0.0.1
  Additions:
  - Added function unsetHighlights();
  - Changed the function highlights() to loop through moves[] instead of the nested Array;
  - Fixed function move() from PawnB Object and added function unsetHighlights() to move();
  - Added loop for pawns to function setStartPos();

  Fixed Bugs:
  - Cell where the first pawn moved to gets highlighted;
  - After Moving the first Pawn all Pawns are only able to move 1 spot.
