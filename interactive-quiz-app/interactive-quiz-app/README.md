# Interactive Quiz App (JavaScript)

A beginner-friendly command-line quiz built with modern JavaScript ES modules. It asks multiple-choice JavaScript questions, validates input, gives immediate feedback and explanations, calculates a score, displays an answer review, and lets the player restart.

## Project structure

```text
interactive-quiz-app/
├── input/
│   └── questions.json
├── output/                 # Reserved for optional saved results
├── screens/                # Sample terminal-screen illustrations
│   ├── welcome-screen.png
│   ├── question-screen.png
│   ├── feedback-screen.png
│   └── results-screen.png
├── modules/
│   ├── questionData.js
│   ├── menu.js
│   ├── inputValidation.js
│   ├── quiz.js
│   ├── score.js
│   ├── results.js
│   ├── restart.js
│   └── terminal.js
├── index.js
└── README.md
```

## Requirements

- Node.js 18 or newer (no third-party packages required).

## Run the app

1. Extract the project ZIP.
2. Open a terminal in the `interactive-quiz-app` folder.
3. Run:

   ```bash
   node index.js
   ```

4. Enter an option number (1–4) for each question.
5. Type `X` during a question to exit. After the quiz, type `Y` to restart or `N` to finish.

## Features

- Ten multiple-choice JavaScript questions.
- Input validation with clear error messages.
- Instant correct/incorrect feedback and explanations.
- Score, percentage, and answer review.
- Restart option.
- Separate modules for data, validation, quiz flow, scoring, results, and restart.
- `input/questions.json` is an optional JSON copy of the question bank. The app currently imports questions from `modules/questionData.js`; update that module when changing questions.

## Module overview

- `questionData.js`: question bank and correct-answer indexes.
- `menu.js`: welcome screen.
- `inputValidation.js`: validates option input and exit command.
- `quiz.js`: runs each question and prints feedback.
- `score.js`: records answers and calculates percentage.
- `results.js`: prints the final summary and answer review.
- `restart.js`: asks whether to play another round.
- `terminal.js`: shares a single Node.js terminal input interface.
- `index.js`: connects all modules.

## Optional extension ideas

- Load the question bank from `input/questions.json` using Node's `fs/promises`.
- Save each quiz result as a timestamped JSON file inside `output/`.
- Add categories and difficulty levels.
- Add a timer for each question.
- Add unit tests for validation and scoring.

## Example interaction

```text
======================================
       INTERACTIVE QUIZ APP
======================================
Test your JavaScript knowledge!
10 questions | 1 point per correct answer

Question 1 of 10
Which keyword declares a block-scoped variable in JavaScript?
  1. var
  2. let
  3. define
  4. dim
Your answer (1-4, X to exit): 2
✓ Correct!
```
