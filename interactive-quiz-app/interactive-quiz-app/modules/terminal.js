// Small shared terminal-input helper.
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function ask(prompt) {
  return new Promise(resolve => rl.question(prompt, resolve));
}

export function closeTerminal() {
  rl.close();
}
