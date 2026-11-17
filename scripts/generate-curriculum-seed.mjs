import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const inputPath = resolve("data/curriculum/math-grade-1.json");
const outputPath = resolve("supabase/seed/0001_math_grade1.sql");
const data = JSON.parse(await readFile(inputPath, "utf8"));

const q = (value) => `'${String(value).replaceAll("'", "''")}'`;
const curriculum = data.curriculum;
const source = data.source;
const lines = [];

lines.push("-- Generated from data/curriculum/math-grade-1.json");
lines.push("-- Do not hand-edit. Run: npm run generate:curriculum-seed");
lines.push("begin;");
lines.push("");
lines.push(
  `insert into curricula (country_code, code, name) values ('MA', 'PRIMARY', 'Maroc – Enseignement primaire') ` +
    `on conflict (country_code, code) do update set name = excluded.name;`,
);
lines.push(
  `insert into curriculum_versions (curriculum_id, version_label, issued_on, source_title, source_url, status, metadata) ` +
    `select id, '2021-07', '2021-07-01', ${q(source.title_ar)}, ${q(source.url)}, 'draft', ` +
    `${q(JSON.stringify({ official_host_copy_verified: source.official_host_copy_verified }))}::jsonb ` +
    `from curricula where country_code = 'MA' and code = 'PRIMARY' ` +
    `on conflict (curriculum_id, version_label) do update set source_title = excluded.source_title, source_url = excluded.source_url, metadata = excluded.metadata;`,
);
lines.push(
  `insert into grades (curriculum_version_id, stage_code, grade_number, sort_order) ` +
    `select cv.id, 'primary', 1, 1 from curriculum_versions cv join curricula c on c.id = cv.curriculum_id ` +
    `where c.country_code = 'MA' and c.code = 'PRIMARY' and cv.version_label = '2021-07' ` +
    `on conflict (curriculum_version_id, stage_code, grade_number) do update set sort_order = excluded.sort_order;`,
);
lines.push(
  `insert into subjects (curriculum_version_id, code, sort_order) ` +
    `select cv.id, 'MATH', 1 from curriculum_versions cv join curricula c on c.id = cv.curriculum_id ` +
    `where c.country_code = 'MA' and c.code = 'PRIMARY' and cv.version_label = '2021-07' ` +
    `on conflict (curriculum_version_id, code) do update set sort_order = excluded.sort_order;`,
);
lines.push("");

for (const unit of curriculum.units) {
  lines.push(
    `insert into chapters (grade_id, subject_id, external_code, sort_order, status) ` +
      `select g.id, s.id, 'MA-G1-U${unit.number}', ${unit.number}, 'draft' ` +
      `from grades g join curriculum_versions cv on cv.id = g.curriculum_version_id ` +
      `join curricula c on c.id = cv.curriculum_id join subjects s on s.curriculum_version_id = cv.id ` +
      `where c.country_code = 'MA' and c.code = 'PRIMARY' and cv.version_label = '2021-07' ` +
      `and g.grade_number = 1 and g.stage_code = 'primary' and s.code = 'MATH' ` +
      `on conflict (grade_id, subject_id, sort_order) do update set external_code = excluded.external_code;`,
  );

  for (const [index, topic] of unit.topics.entries()) {
    const metadata = {
      source_id: source.id,
      source_pages: source.reference_pages,
      review_status: data.status,
      ...(topic.source_normalization_note
        ? { source_normalization_note: topic.source_normalization_note }
        : {}),
    };

    lines.push(
      `insert into topics (chapter_id, external_code, curriculum_week, domain_code, sort_order, status, source_metadata) ` +
        `select ch.id, ${q(topic.id)}, ${topic.week}, ${q(topic.domain)}, ${index + 1}, 'draft', ` +
        `${q(JSON.stringify(metadata))}::jsonb from chapters ch ` +
        `where ch.external_code = 'MA-G1-U${unit.number}' ` +
        `on conflict (chapter_id, external_code) do update set curriculum_week = excluded.curriculum_week, ` +
        `domain_code = excluded.domain_code, sort_order = excluded.sort_order, source_metadata = excluded.source_metadata;`,
    );

    for (const [locale, value] of [
      ["ar", topic.title_ar],
      ["fr", topic.title_fr],
    ]) {
      lines.push(
        `insert into translations (entity_type, entity_id, locale, field_name, value, status) ` +
          `select 'topic', t.id, ${q(locale)}, 'title', ${q(value)}, 'draft' from topics t ` +
          `where t.external_code = ${q(topic.id)} ` +
          `on conflict (entity_type, entity_id, locale, field_name) do update set value = excluded.value, status = excluded.status;`,
      );
    }
  }
  lines.push("");
}

lines.push("commit;");
lines.push("");

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, lines.join("\n"), "utf8");
console.log(`Generated ${outputPath} with ${curriculum.units.flatMap((unit) => unit.topics).length} topics.`);

