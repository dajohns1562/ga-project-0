# Tic Tac Toe
By David Johnson

### Access

You can play the latest version of the game [here](https://dajohns1562.github.io/ga-project-0/). The github repo is available [here](https://github.com/dajohns1562/ga-project-0).

### Gameplay

The game is a simple "Tac Tac Toe" game whereby players alternate in placing their "X" or "O" on the board with the goal of placing three consecutive Xs or Os either horizontally, vertically, or diagonally. The first player to do this wins that round of the game.

After a player wins the round, click the "*new game*" button. The board will be cleared and the next round can start.

The scoreboard will track each player's wins, as well as the number of tied games.

### Technologies Used

The game was built using:

* Javascript
* jQuery
* CSS
* HTML

### Technical Approach

**Board Construction**

The board itself is made up of HTML elements, each with a unique id (numbered 1 - 9):

```HTML
<button id="1"></button>
```

As a player clicks a button, we use jQuery to populate the button with a value of either "X" or "0":

```Javascript
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
```

**Main Data Structure**

The board itself serves as our main data structure for tracking the progress of the game and evaluating who won, i.e.:

```Javascript
if ($('#1, #2, #3').text() === "XXX") {winner = "Player 1";}
```
This approach was selected in instead of pushing user selections into an array or object as we feel the alternatives would have made for redundant code.

### Known bugs

There are currently no known bugs, but please report any bugs as soon as possible.

### Upcoming Features

We will be adding the following features shortly:

* Customizable player icons (instead of X and O)
* Customizable player names
* User-defined board sizes
* AI opponent for single player Gameplay
