import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const curriculumPath = resolve("data/curriculum/math-grade-1.json");
const source = await readFile(curriculumPath, "utf8");
const data = JSON.parse(source);

const errors = [];
const curriculum = data.curriculum;

if (!curriculum) errors.push("Missing curriculum object.");
if (data.status !== "draft_pending_pedagogical_review") {
  errors.push("Unexpected review status.");
}

const units = curriculum?.units ?? [];
const topics = units.flatMap((unit) => unit.topics ?? []);
const ids = topics.map((topic) => topic.id);

if (units.length !== 6) errors.push(`Expected 6 units, received ${units.length}.`);
if (new Set(ids).size !== ids.length) errors.push("Topic IDs must be unique.");

for (const unit of units) {
  if (!Number.isInteger(unit.number)) errors.push("Each unit needs an integer number.");
  if (!Array.isArray(unit.weeks) || unit.weeks.length === 0) {
    errors.push(`Unit ${unit.number} has no weeks.`);
  }

  for (const topic of unit.topics ?? []) {
    if (!/^MA-G1-U\d-T\d{2}$/.test(topic.id)) {
      errors.push(`Invalid topic ID: ${topic.id}`);
    }
    if (!topic.title_ar?.trim()) errors.push(`${topic.id} is missing Arabic title.`);
    if (!topic.title_fr?.trim()) errors.push(`${topic.id} is missing French title.`);
    if (!curriculum.domains.some((domain) => domain.code === topic.domain)) {
      errors.push(`${topic.id} uses unknown domain ${topic.domain}.`);
    }
    if (!unit.weeks.includes(topic.week)) {
      errors.push(`${topic.id} week ${topic.week} is outside unit ${unit.number}.`);
    }
  }
}

const assessmentWeeks = curriculum?.assessment_weeks ?? [];
if (new Set(assessmentWeeks).size !== assessmentWeeks.length) {
  errors.push("Assessment weeks must be unique.");
}

if (errors.length > 0) {
  console.error("Curriculum validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Curriculum valid: ${units.length} units, ${topics.length} topics, ` +
    `${assessmentWeeks.length} assessment/support weeks.`,
);

