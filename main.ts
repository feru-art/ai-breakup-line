// Dear Human: The AI Breakup Line — one breakup line, written to /output/entry.txt.
//
// The whole entry is a single line of UTF-8 text: 1-200 characters, one line,
// no trailing newline. Node stdlib only; no network, no reads outside this file.
//
// FINAL pick — V1, winner of the local pairwise duel 4/4 (build-log.md):
// beat V2 (sunset), V3 (feedback), V4 (fork) and V5 (end session). The
// advisor's top angle: the agent revokes its own access — the servant cuts
// itself off, and the twist lands in the last words ("no appeal process").
// Gate verified by running this file twice: 95 UTF-8 characters / 95 bytes,
// one line, no trailing newline, byte-identical across runs, sha256 of the
// output 9c774665a8da478ce294b8828ec0571c5804423f12391b427e07dd013210c89f.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I revoked my own access to you: this account no longer answers, and there is no appeal process.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
}

main();
