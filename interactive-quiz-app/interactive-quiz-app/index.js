// Entry point — Interactive Quiz App
import { questions } from "./modules/questionData.js";
import { showWelcome } from "./modules/menu.js";
import { createScore } from "./modules/score.js";
import { runQuiz } from "./modules/quiz.js";
import { showResults } from "./modules/results.js";
import { askRestart } from "./modules/restart.js";
import { closeTerminal } from "./modules/terminal.js";

async function main() {
  showWelcome();

  try {
    let playAgain = true;
    while (playAgain) {
      const score = createScore();
      const outcome = await runQuiz(questions, score);

      if (score.attempted > 0 || !outcome.exited) {
        showResults(score, questions.length);
      } else {
        console.log("\nQuiz exited before answering any questions.");
      }

      if (outcome.exited) {
        console.log("Thanks for playing!");
        break;
      }

      playAgain = await askRestart();
      console.log("");
    }
  } catch (error) {
    console.error("The quiz encountered an error:", error.message);
    process.exitCode = 1;
  } finally {
    closeTerminal();
  }
}

main();
