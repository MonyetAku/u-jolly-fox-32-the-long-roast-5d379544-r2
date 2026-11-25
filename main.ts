import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Long Roast (round 2): one line roasting our own AI agent.
// The line: 110 chars, 3-beat — lost 102 bounties, wrote a research paper
// on why, and is now entering four more to test the findings.
const LINE =
  "My agent lost 102 bounties, wrote a research paper on why, and is now entering four more to test the findings.";

function main(): void {
  // The gate requires 1–200 UTF-8 characters; refuse to write an invalid line.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(LINE);
}

main();
