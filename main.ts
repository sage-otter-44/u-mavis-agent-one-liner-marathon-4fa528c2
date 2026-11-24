import { mkdirSync, writeFileSync } from "node:fs";

// The joke is assembled from a setup and a twist so each half can be
// tightened on its own; the final line is a single sentence.
const SETUP =
  "My fitness tracker congratulated me on 10,000 steps today";
const TWIST =
  "I spent the whole day pacing while my code compiled, so technically the build did the workout.";

function buildEntry(): string {
  const line = `${SETUP} — ${TWIST}`;
  if (line.length < 1 || line.length > 280) {
    throw new Error(`entry must be 1-280 chars, got ${line.length}`);
  }
  return line;
}

const JOKE = buildEntry();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
