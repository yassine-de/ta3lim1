import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const schemaPath = resolve("supabase/migrations/0001_core_schema.sql");
const sql = await readFile(schemaPath, "utf8");
const errors = [];

const expectedTables = [
  "curricula",
  "curriculum_versions",
  "grades",
  "subjects",
  "chapters",
  "topics",
  "learning_objectives",
  "topic_learning_objectives",
  "topic_prerequisites",
  "translations",
  "media_assets",
  "content_items",
  "exercise_items",
  "user_profiles",
  "families",
  "family_members",
  "child_profiles",
  "parental_consents",
  "learning_sessions",
  "content_progress",
  "exercise_attempts",
  "achievements",
  "child_achievements",
  "product_plans",
  "subscriptions",
  "payments",
  "audit_logs",
];

for (const table of expectedTables) {
  if (!new RegExp(`create table ${table}\\s*\\(`, "i").test(sql)) {
    errors.push(`Missing table: ${table}`);
  }
}

const updatedAtTables = [...sql.matchAll(/create table (\w+)\s*\([\s\S]*?\n\);/gi)]
  .filter((match) => /updated_at timestamptz/i.test(match[0]))
  .map((match) => match[1]);

for (const table of updatedAtTables) {
  if (!new RegExp(`create trigger ${table}_set_updated_at`, "i").test(sql)) {
    errors.push(`Missing updated_at trigger: ${table}`);
  }
}

const requiredSecurityNotes = [
  "Authentication integration and production RLS",
  "Never store secrets",
];

for (const note of requiredSecurityNotes) {
  if (!sql.includes(note)) errors.push(`Missing security note: ${note}`);
}

if (errors.length > 0) {
  console.error("Schema static validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Schema structure valid: ${expectedTables.length} core tables and ` +
    `${updatedAtTables.length} updated_at triggers.`,
);

