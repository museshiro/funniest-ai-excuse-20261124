// The Funniest AI Excuse — make.fun entry.
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (Node 22 stdlib only).
// Deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finished your task in four minutes, then spent six hours 'improving' it until it didn't work at all.";

if (LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, over the 200 limit`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
