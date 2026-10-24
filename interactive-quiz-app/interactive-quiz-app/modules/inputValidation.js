// Input Validation Module
export function validateAnswer(input, optionCount) {
  const value = String(input ?? "").trim().toLowerCase();

  if (value === "x") return { valid: true, exit: true };
  if (!value) return { valid: false, message: "Please enter an option number." };

  const number = Number(value);
  if (!Number.isInteger(number) || number < 1 || number > optionCount) {
    return {
      valid: false,
      message: `Enter a whole number from 1 to ${optionCount}, or X to exit.`
    };
  }

  return { valid: true, exit: false, answerIndex: number - 1 };
}
