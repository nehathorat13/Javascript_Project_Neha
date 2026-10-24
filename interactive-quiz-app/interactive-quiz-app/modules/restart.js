// Restart and Exit Module
import { ask } from "./terminal.js";

export async function askRestart() {
  while (true) {
    const answer = (await ask("Would you like to play again? (Y/N): ")).trim().toLowerCase();
    if (["y", "yes"].includes(answer)) return true;
    if (["n", "no"].includes(answer)) return false;
    console.log("Please enter Y or N.");
  }
}
