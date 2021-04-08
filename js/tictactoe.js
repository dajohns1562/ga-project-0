$(document).ready(function() {

  //just declaring variables here so they are globally accessible.
  let winner = null;

  let player1Name = "Player 1";
  let player2Name = "Player 2";

  let player1Icon = "X";
  let player2Icon = "O";

  let player1Tally = 0;
  let player2Tally = 0;
  let tieTally = 0;

  let activePlayer = "Player 1";
  let activePlayerInitial = "Player 1";

  let squaresLeft = 9;

    //this function fills in the squares with icons
    //"this" statement ensures that only empty squares can be filled in.
    //tracks squares left unfilled so that the game cannot be reset before the end of a game
    //updates the "current player text on screen so users know who's turn it is"
    $('.square').click(function() {
      squaresLeft = squaresLeft - 1;
        if (($(this).text() === "") && activePlayer === "Player 1" && winner === null) {
          $(this).text(player1Icon);
          activePlayer = "Player 2";
          $('#current-turn').html('<mark>Player 2</mark>');
        }
        if (($(this).text() === "") && activePlayer === "Player 2" && winner === null) {
          $(this).text(player2Icon);
          activePlayer = "Player 1";
          $('#current-turn').html('<mark>Player 1</mark>');
        }
    })
    //this function identifies the winner
    $('.square').click(function(){
      if ($('#1, #2, #3').text() === "XXX") {winner = "Player 1";}
      if ($('#1, #2, #3').text() === "OOO") {winner = "Player 2";}
      if ($('#4, #5, #6').text() === "XXX") {winner = "Player 1";}
      if ($('#4, #5, #6').text() === "OOO") {winner = "Player 2";}
      if ($('#7, #8, #9').text() === "XXX") {winner = "Player 1";}
      if ($('#7, #8, #9').text() === "OOO") {winner = "Player 2";}
      if ($('#1, #4, #7').text() === "XXX") {winner = "Player 1";}
      if ($('#1, #4, #7').text() === "OOO") {winner = "Player 2";}
      if ($('#2, #5, #8').text() === "XXX") {winner = "Player 1";}
      if ($('#2, #5, #8').text() === "OOO") {winner = "Player 2";}
      if ($('#3, #6, #9').text() === "XXX") {winner = "Player 1";}
      if ($('#3, #6, #9').text() === "OOO") {winner = "Player 2";}
      if ($('#1, #5, #9').text() === "XXX") {winner = "Player 1";}
      if ($('#1, #5, #9').text() === "OOO") {winner = "Player 2";}
      if ($('#3, #5, #7').text() === "XXX") {winner = "Player 1";}
      if ($('#3, #5, #7').text() === "OOO") {winner = "Player 2";}
    })

    //this function counts the score and displays it on the scoreboard
    //function will only run when the game has not yet been called (gameCalled === false)
    //updates the h1 to display the current winner
    let gameCalled = false;
    $('.square').click(function(){
      if (winner === "Player 1" && gameCalled === false) {
        player1Tally = player1Tally + 1;
        $('.player1').text(player1Tally);
        gameCalled = true;
        $('h1').html("<mark>PLAYER 1 WINS!</mark>");
      }
      if (winner === "Player 2" && gameCalled === false) {
        player2Tally = player2Tally + 1;
        $('.player2').text(player2Tally);
        gameCalled = true;
        $('h1').html("<mark>PLAYER 2 WINS!</mark>");
      }
      if (squaresLeft === 0 && winner === null && gameCalled === false) {
        tieTally = tieTally + 1;
        $('.tie').text(tieTally);
        gameCalled = true;
        $('h1').html("<mark>IT'S A TIE!</mark>");
      }
    })

//this function resets the board, other relevant HTML elements (h1, current player, etc), active player variable etc.
//function also ensures that if player 1 went first this game, player 2 will go first next game.
//activePlayerInitial tracks who got the first move so first move can be alternated between players.
//function will only run after a win has been declared so the board cannot be reset prematurely. 
  $('.reset-button').click(function(){
    if (gameCalled === true) {
      $('.square').text("");
      squaresLeft = 9;
      gameCalled = false;
      $('h1').text("Let's Play!");
      winner = null;
      if (activePlayerInitial === "Player 1") {
        activePlayer = "Player 2";
        activePlayerInitial = "Player 2";
        $('#current-turn').html('<mark>Player 2</mark>');
      } else {
        activePlayer = "Player 1";
        activePlayerInitial = "Player 1";
        $('#current-turn').html('<mark>Player 1</mark>');
      }
    }
    else {
      alert("Game in progress!");
    }
  })
})
