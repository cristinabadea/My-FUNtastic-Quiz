/** @format */
/** @format */
var input = document.getElementById("initials");
var submit = document.getElementById("submit");
var qTitle = document.getElementById("question-title");
var visibility = document.getElementById("questions");
var choices = document.getElementById("choices");
var qIndex = 0;
var endScreen = document.getElementById("end-screen");
var score = document.getElementById("final-score");
var secondsLeft = 50;
var showTimer = document.getElementById("time");
showTimer.textContent = secondsLeft;
var timer;

// Start button functionallity
function startGame() {
  startBtn = document.getElementById("start");
  startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    secondsLeft = 50;
    showTimer.textContent = secondsLeft;
    timer = setInterval(updateTimer, 1000);
    playTheGame();
  });
}

//Timer
function updateTimer() {
  console.log("inside updateTimer");
  secondsLeft--;
  showTimer.textContent = secondsLeft;
  if (secondsLeft === 0) {
    endQuiz();
  }
}

//play the game
function playTheGame() {
  visibility.style.display = "block";

  qTitle.textContent = questions[qIndex].question;

  var ol = document.createElement("ol");
  choices.appendChild(ol);

  for (var i = 0; i < questions[qIndex].answers.length; i++) {
    var li = document.createElement("li");
    var liBtn = document.createElement("button");
    ol.appendChild(li);
    li.appendChild(liBtn);
    liBtn.textContent += questions[qIndex].answers[i];
    liBtn.onclick = function (event) {
      if (
        event.target.textContent ===
        questions[qIndex].answers[questions[qIndex].correctAnswerIndex]
      ) {
        if (qIndex < questions.length - 1) {
          ol.style.display = "none";
          console.log("Correct!");
          qIndex++;
          playTheGame();
        } else {
          ol.style.display = "none";
          endQuiz();
        }
      } else {
        console.log("false");
        if (secondsLeft > 10) {
          secondsLeft = secondsLeft - 10;
          score.textContent = secondsLeft;
        } else {
          secondsLeft = 0;
          ol.style.display = "none";
          endQuiz();
        }
      }
    };
  }
}

//end game
function endQuiz() {
  clearInterval(timer);
  endScreen.style.display = "block";
  score.textContent = secondsLeft;
  showTimer.textContent = secondsLeft;
}

//Submit score functionality
function submitScore() {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value.length !== 0 && input.value.length <= 3) {
      var finalScore = document.getElementById("final-score").innerText;
      var player = { name: input.value, score: finalScore };
      var playerCount = Number(localStorage.getItem("player_count")) || 0;
      localStorage.setItem(
        "Current_score_" + (playerCount + 1),
        JSON.stringify(player)
      );
      localStorage.setItem("player_count", playerCount + 1);
    } else {
      displayMessage();
    }
  });
}
//displayMessage function
function displayMessage() {
  alert("ERROR! You should use maximum 3 initials!");
  input.value = "";
}

startGame();
submitScore();
