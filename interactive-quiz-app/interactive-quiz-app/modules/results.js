// Results Module
import { getPercentage } from "./score.js";

export function showResults(score, totalQuestions) {
  const percentage = getPercentage(score, totalQuestions);
  console.log("\n======================================");
  console.log("                RESULTS");
  console.log("======================================");
  console.log(`Correct answers : ${score.correct}`);
  console.log(`Questions tried : ${score.attempted}`);
  console.log(`Total questions : ${totalQuestions}`);
  console.log(`Final score     : ${percentage}%`);

  if (percentage >= 80) console.log("Excellent work! You know your JavaScript well.");
  else if (percentage >= 50) console.log("Good effort. Review the explanations and try again.");
  else console.log("Keep practising. Repeating the quiz will help.");

  if (score.answers.length) {
    console.log("\nAnswer review:");
    score.answers.forEach((item, index) => {
      console.log(`${index + 1}. ${item.isCorrect ? "Correct" : "Incorrect"} — ${item.question}`);
      console.log(`   Your answer: ${item.selected}`);
      console.log(`   Correct: ${item.correctAnswer}`);
    });
  }
  console.log("======================================\n");
}
