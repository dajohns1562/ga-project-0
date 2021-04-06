$(document).ready(function() {

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

    //fills in the squares
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
    //identifies the winner
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
    let gamesCalled = 0;
    $('.square').click(function(){
      if (winner === "Player 1" && gamesCalled === 0) {
        player1Tally = player1Tally+1;
        $('.player1').text(player1Tally);
        gamesCalled = 1;
        $('h1').html("<mark>PLAYER 1 WINS!</mark>");
      }
      if (winner === "Player 2" && gamesCalled === 0) {
        player2Tally = player2Tally+1;
        $('.player2').text(player2Tally);
        gamesCalled = 1;
        $('h1').html("<mark>PLAYER 2 WINS!</mark>");
      }
      if (squaresLeft === 0 && winner === null && gamesCalled === 0) {
        tieTally = tieTally + 1;
        $('.tie').text(tieTally);
        gamesCalled = 1;
        $('h1').html("<mark>IT'S A TIE!</mark>");
      }
    })

//this function resets the board
  $('.reset-button').click(function(){
    if (gamesCalled === 1) {
      $('.square').text("");
      squaresLeft = 9;
      gamesCalled = 0;
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
