// Score Management Module
export function createScore() {
  return { correct: 0, attempted: 0, answers: [] };
}

export function recordAnswer(score, question, selectedIndex) {
  const isCorrect = selectedIndex === question.answer;
  score.attempted += 1;
  if (isCorrect) score.correct += 1;

  score.answers.push({
    question: question.question,
    selected: question.options[selectedIndex],
    correctAnswer: question.options[question.answer],
    isCorrect,
    explanation: question.explanation
  });

  return isCorrect;
}

export function getPercentage(score, totalQuestions) {
  if (totalQuestions === 0) return 0;
  return Math.round((score.correct / totalQuestions) * 100);
}
