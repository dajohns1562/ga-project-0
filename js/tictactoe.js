$(document).ready(function() {

  let player1Name = "Player 1";
  let player2Name = "Player 2";

  let player1selections = [];
  let player2selections = [];

  let player1Icon = "X";
  let player2Icon = "0";

  let activePlayer = "Player 1";

  console.log(activePlayer);

    $('.square').click(function() {
        if (($(this).text() === "") && activePlayer === "Player 1") {
          let selectionID = $(this).attr('id');
          player1selections.push(selectionID);
          $(this).text(player1Icon);
          activePlayer = "Player 2";
          $('#current-turn').text(activePlayer);
        }
        if (($(this).text() === "") && activePlayer === "Player 2") {
          let selectionID = $(this).attr('id');
          player2selections.push(selectionID);
          $(this).text(player2Icon);
          activePlayer = "Player 1";
          $('#current-turn').text(activePlayer);
        }
    })

})
