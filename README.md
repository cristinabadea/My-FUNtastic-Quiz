<!-- @format -->

# My-FUNtastic-Quiz

## Description

I have built a timed coding quiz with multiple-choice questions. This app runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript code. The interface is clean, polished, and responsive.

Criteria:

- A start button that when clicked a timer starts and the first question appears.

  - Questions contain buttons for each answer.
  -
  - When answer is clicked, the next question appears
  -
  - If the answer clicked was incorrect then subtract time from the clock

- The quiz should end when all questions are answered or the timer reaches 0.

  - When the game ends, it should display their score and give the user the ability to save their initials and their score

![Watch the video](./Assets/Images/Screen%20Recording%202023-01-17%20at%2020.52.16.mov)

## Installation

N/A

## Usage

- I first created the questions array which contains multiple objects - each object capturing the question, an array of answers and the correct answer.

  ![JS-Code-snippet](./Assets/Images/Screenshot%202023-01-17%20at%2021.00.23.png)

- I then created the functions which enable the following:

  - the user can start the game by clicking the **Start** button (using _event listeners_),
  - the user can choose an answer by clicking on it (using _event listeners_),
  - if the answer is wrong, the user is penalised with 10 seconds (using _if statements, setInterval and clearInterval functions_),
  - if the answer is right, the next question will be displayed (using _style attribute, createElement_),
  - the number of points is saved when the quiz ends (using _textContent_)
  - the user can save their initials and the score and can also check the highscore board which will render top 5 scores (using _localStorage_)
  - the user can clear the highscores board (using _localStorage.clear function_)

![JS-Code-snippet](./Assets/Images/Screenshot%202023-01-17%20at%2021.10.18.png)
![JS-Code-snippet](./Assets/Images/Screenshot%202023-01-17%20at%2021.10.36.png)
![JS-Code-snippet](./Assets/Images/Screenshot%202023-01-17%20at%2021.10.47.png)
![JS-Code-snippet](./Assets/Images/Screenshot%202023-01-17%20at%2021.10.59.png)

## Credits

N/A

## License

MIT License

## Badges

N/A

## Features

N/A

## How to Contribute

N/A

## Tests

N/A

## Deployed website
