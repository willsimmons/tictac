let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//so lets create a board, 0, 9 because that's how many spaces are in a tic tac toe board
//naive results aka game over in case of the following are all one character
//could probably do better as a nested array, but we're out of time
//012  horizontal
//345
//678
//
//036  vertical
//147
//258
//
//048 diagonal
//246
let turnCounter = 0;
//this will be handy in case of a tie
//x will go first all of the time
let currentPlayer = 'X';
//so from a simplistic level, i'm thinking while gameOver is false; 
//we swicth turns between X and 0, and accept an input, that input represents their turn 
//if it's a legal turn
//after the turn we need to check to see if the game is over, if not, then the next player goes
//
let gameOver = false; 
while (gameOver !== true) {
  //tie condition
  if (turnCounter === 9) {
    console.log('the game is a draw, re run game.js to play again');
    gameOver = true;
  }
  //player plays - can be used for x or y
  cont takeTurn(currentPlayer, board) {
    console.log(board); //yes it will just show up as a numberic array, but that's for
    //simplistic sample purposes
    console.log("It's "+ currentPlayer +"'s turn, please enter a square: ");
    //something revolving stdin to grab the actual input 
    //check to see if the value is a number
      //if not, then reprompt
    //check to see if the move is valid
      //if not, then repompt
    //check to see if it6's a victory move
      //if not, then take turn with the other player
  }
  turnCounter++;
}

const checkBoard(board) {
  //can simply do if statements for all potential board spots
}
