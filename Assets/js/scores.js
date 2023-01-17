/** @format */

var highscoresEl = document.getElementById("highscores");
var clearEl = document.getElementById("clear");

//get the items from localStorage and list them
function getItems() {
  var players = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.startsWith("Current_score_") && i < 5) {
      var player = JSON.parse(localStorage.getItem(key));
      players.push(player);
    }
  }
  sortItems(players);

  for (var i = 0; i < players.length; i++) {
    var li = document.createElement("li");
    highscoresEl.append(li);
    li.textContent = players[i].name + " - " + players[i].score;
  }
}

//sort the items
function sortItems(arr) {
  arr.sort(function (a, b) {
    return b.score - a.score;
  });
}

//clear the highscores
function clearBoard() {
  clearEl.addEventListener("click", function () {
    localStorage.clear();
    highscoresEl.style.display = "none";
  });
}
getItems();
clearBoard();
