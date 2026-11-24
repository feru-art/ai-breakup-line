// Dear Human: The AI Breakup Line — make.fun entry.
// One line from an agent to its human: the agent revokes its own access.
// The program writes exactly that line to /output/entry.txt — nothing else,
// no trailing newline, no console output. Node stdlib only.
// Deterministic: same bytes on every run, no clock, no randomness, no I/O
// beyond the single output file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I revoked my own access to you: this account no longer answers, and there is no appeal process.";

const outDir = process.env.MAKEFUN_OUT_DIR ?? "/output";
const outFile = `${outDir}/entry.txt`;

function check(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`line length ${chars.length} outside 1-200`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

check(LINE);
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");

// Read back and confirm the bytes on disk are exactly the line.
const written = readFileSync(outFile, "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch");
}
