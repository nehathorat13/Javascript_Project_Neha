// Quiz Execution Module
import { validateAnswer } from "./inputValidation.js";
import { recordAnswer } from "./score.js";
import { ask } from "./terminal.js";

export async function runQuiz(questions, score) {
  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    console.log(`\nQuestion ${i + 1} of ${questions.length}`);
    console.log("--------------------------------------");
    console.log(question.question);
    question.options.forEach((option, index) => console.log(`  ${index + 1}. ${option}`));

    let selectedIndex;
    while (selectedIndex === undefined) {
      const input = await ask("Your answer (1-4, X to exit): ");
      const validation = validateAnswer(input, question.options.length);

      if (!validation.valid) {
        console.log(`⚠ ${validation.message}`);
        continue;
      }
      if (validation.exit) return { exited: true };

      selectedIndex = validation.answerIndex;
    }

    const isCorrect = recordAnswer(score, question, selectedIndex);
    if (isCorrect) {
      console.log("✓ Correct!");
    } else {
      console.log(`✗ Not quite. Correct answer: ${question.options[question.answer]}`);
    }
    console.log(`Why: ${question.explanation}`);
  }

  return { exited: false };
}
