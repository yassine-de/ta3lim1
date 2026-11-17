-- TA3LIM core domain schema
-- Provider-neutral PostgreSQL. Authentication integration and production RLS
-- policies are intentionally deferred until the auth provider is selected.

create extension if not exists pgcrypto;

create type publication_status as enum (
  'draft', 'in_review', 'approved', 'published', 'archived'
);

create type content_kind as enum (
  'video', 'exercise_set', 'worksheet', 'summary', 'assessment'
);

create type learning_status as enum (
  'not_started', 'in_progress', 'completed', 'needs_review'
);

create type family_role as enum ('owner', 'guardian');
create type subscription_status as enum ('trial', 'active', 'paused', 'past_due', 'cancelled', 'expired');
create type payment_status as enum ('pending', 'succeeded', 'failed', 'refunded', 'cancelled');

create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table curricula (
  id uuid primary key default gen_random_uuid(),
  country_code char(2) not null,
  code text not null,
  name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (country_code, code)
);

create table curriculum_versions (
  id uuid primary key default gen_random_uuid(),
  curriculum_id uuid not null references curricula(id) on delete cascade,
  version_label text not null,
  issued_on date,
  source_title text not null,
  source_url text,
  status publication_status not null default 'draft',
  valid_from date,
  valid_to date,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (curriculum_id, version_label)
);

create table grades (
  id uuid primary key default gen_random_uuid(),
  curriculum_version_id uuid not null references curriculum_versions(id) on delete cascade,
  stage_code text not null,
  grade_number smallint not null check (grade_number between 1 and 13),
  sort_order smallint not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (curriculum_version_id, stage_code, grade_number)
);

create table subjects (
  id uuid primary key default gen_random_uuid(),
  curriculum_version_id uuid not null references curriculum_versions(id) on delete cascade,
  code text not null,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (curriculum_version_id, code)
);

create table chapters (
  id uuid primary key default gen_random_uuid(),
  grade_id uuid not null references grades(id) on delete cascade,
  subject_id uuid not null references subjects(id) on delete cascade,
  external_code text,
  sort_order smallint not null,
  status publication_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (grade_id, subject_id, sort_order)
);

create table topics (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references chapters(id) on delete cascade,
  external_code text not null,
  curriculum_week smallint check (curriculum_week between 1 and 53),
  domain_code text not null,
  sort_order smallint not null,
  status publication_status not null default 'draft',
  source_metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (chapter_id, external_code)
);

create table learning_objectives (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  objective_type text not null default 'knowledge',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table topic_learning_objectives (
  topic_id uuid not null references topics(id) on delete cascade,
  learning_objective_id uuid not null references learning_objectives(id) on delete cascade,
  sort_order smallint not null default 0,
  primary key (topic_id, learning_objective_id)
);

create table topic_prerequisites (
  topic_id uuid not null references topics(id) on delete cascade,
  prerequisite_topic_id uuid not null references topics(id) on delete cascade,
  primary key (topic_id, prerequisite_topic_id),
  check (topic_id <> prerequisite_topic_id)
);

create table translations (
  id uuid primary key default gen_random_uuid(),
  entity_type text not null,
  entity_id uuid not null,
  locale text not null check (locale in ('ar', 'fr', 'ary')),
  field_name text not null,
  value text not null,
  status publication_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (entity_type, entity_id, locale, field_name)
);

create table media_assets (
  id uuid primary key default gen_random_uuid(),
  storage_key text not null unique,
  media_type text not null,
  locale text check (locale in ('ar', 'fr', 'ary')),
  mime_type text not null,
  byte_size bigint check (byte_size >= 0),
  duration_seconds integer check (duration_seconds >= 0),
  checksum text,
  license_metadata jsonb not null default '{}'::jsonb,
  status publication_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table content_items (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references topics(id) on delete cascade,
  kind content_kind not null,
  external_code text not null,
  locale text check (locale in ('ar', 'fr', 'ary')),
  media_asset_id uuid references media_assets(id) on delete set null,
  version integer not null default 1 check (version > 0),
  sort_order smallint not null default 0,
  estimated_minutes smallint check (estimated_minutes > 0),
  status publication_status not null default 'draft',
  metadata jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (topic_id, external_code, locale, version)
);

create table exercise_items (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid not null references content_items(id) on delete cascade,
  external_code text not null,
  exercise_type text not null,
  sort_order smallint not null,
  prompt jsonb not null,
  interaction_data jsonb not null,
  correct_answer jsonb not null,
  hints jsonb not null default '[]'::jsonb,
  explanation jsonb not null default '{}'::jsonb,
  status publication_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (content_item_id, external_code)
);

create table user_profiles (
  id uuid primary key default gen_random_uuid(),
  auth_provider_id text not null unique,
  preferred_locale text not null default 'ar' check (preferred_locale in ('ar', 'fr')),
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table families (
  id uuid primary key default gen_random_uuid(),
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table family_members (
  family_id uuid not null references families(id) on delete cascade,
  user_profile_id uuid not null references user_profiles(id) on delete cascade,
  role family_role not null,
  created_at timestamptz not null default now(),
  primary key (family_id, user_profile_id)
);

create table child_profiles (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references families(id) on delete cascade,
  grade_id uuid not null references grades(id),
  display_name text not null,
  preferred_locale text not null default 'ar' check (preferred_locale in ('ar', 'fr')),
  avatar_key text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table parental_consents (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references families(id) on delete cascade,
  user_profile_id uuid not null references user_profiles(id),
  child_profile_id uuid references child_profiles(id) on delete cascade,
  purpose_code text not null,
  policy_version text not null,
  granted boolean not null,
  recorded_at timestamptz not null default now(),
  withdrawn_at timestamptz,
  metadata jsonb not null default '{}'::jsonb
);

create table learning_sessions (
  id uuid primary key default gen_random_uuid(),
  child_profile_id uuid not null references child_profiles(id) on delete cascade,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  duration_seconds integer check (duration_seconds >= 0),
  client_session_id text,
  metadata jsonb not null default '{}'::jsonb
);

create table content_progress (
  child_profile_id uuid not null references child_profiles(id) on delete cascade,
  content_item_id uuid not null references content_items(id) on delete cascade,
  status learning_status not null default 'not_started',
  progress_percent smallint not null default 0 check (progress_percent between 0 and 100),
  score_percent smallint check (score_percent between 0 and 100),
  attempts_count integer not null default 0 check (attempts_count >= 0),
  first_started_at timestamptz,
  completed_at timestamptz,
  last_activity_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (child_profile_id, content_item_id)
);

create table exercise_attempts (
  id uuid primary key default gen_random_uuid(),
  child_profile_id uuid not null references child_profiles(id) on delete cascade,
  learning_session_id uuid references learning_sessions(id) on delete set null,
  exercise_item_id uuid not null references exercise_items(id) on delete cascade,
  attempt_number integer not null check (attempt_number > 0),
  submitted_answer jsonb not null,
  is_correct boolean not null,
  score numeric(5,2) check (score between 0 and 100),
  hints_used smallint not null default 0 check (hints_used >= 0),
  response_time_ms integer check (response_time_ms >= 0),
  created_at timestamptz not null default now()
);

create table achievements (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  rule jsonb not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table child_achievements (
  child_profile_id uuid not null references child_profiles(id) on delete cascade,
  achievement_id uuid not null references achievements(id) on delete cascade,
  awarded_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  primary key (child_profile_id, achievement_id)
);

create table product_plans (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  currency char(3) not null default 'MAD',
  price_minor integer not null check (price_minor >= 0),
  billing_interval text not null,
  entitlements jsonb not null default '{}'::jsonb,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references families(id) on delete cascade,
  product_plan_id uuid not null references product_plans(id),
  provider text,
  provider_reference text,
  status subscription_status not null,
  starts_at timestamptz not null,
  ends_at timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table payments (
  id uuid primary key default gen_random_uuid(),
  subscription_id uuid references subscriptions(id) on delete set null,
  family_id uuid not null references families(id) on delete cascade,
  provider text not null,
  provider_reference text not null,
  amount_minor integer not null check (amount_minor >= 0),
  currency char(3) not null default 'MAD',
  status payment_status not null,
  occurred_at timestamptz not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (provider, provider_reference)
);

create table audit_logs (
  id bigint generated always as identity primary key,
  actor_user_profile_id uuid references user_profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  family_id uuid references families(id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index topics_chapter_sort_idx on topics(chapter_id, sort_order);
create index content_items_topic_status_idx on content_items(topic_id, status, sort_order);
create index child_profiles_family_idx on child_profiles(family_id, active);
create index learning_sessions_child_started_idx on learning_sessions(child_profile_id, started_at desc);
create index attempts_child_created_idx on exercise_attempts(child_profile_id, created_at desc);
create index progress_child_activity_idx on content_progress(child_profile_id, last_activity_at desc);
create index audit_entity_idx on audit_logs(entity_type, entity_id, created_at desc);

create trigger curricula_set_updated_at before update on curricula
for each row execute function set_updated_at();
create trigger curriculum_versions_set_updated_at before update on curriculum_versions
for each row execute function set_updated_at();
create trigger grades_set_updated_at before update on grades
for each row execute function set_updated_at();
create trigger subjects_set_updated_at before update on subjects
for each row execute function set_updated_at();
create trigger chapters_set_updated_at before update on chapters
for each row execute function set_updated_at();
create trigger topics_set_updated_at before update on topics
for each row execute function set_updated_at();
create trigger learning_objectives_set_updated_at before update on learning_objectives
for each row execute function set_updated_at();
create trigger translations_set_updated_at before update on translations
for each row execute function set_updated_at();
create trigger media_assets_set_updated_at before update on media_assets
for each row execute function set_updated_at();
create trigger content_items_set_updated_at before update on content_items
for each row execute function set_updated_at();
create trigger exercise_items_set_updated_at before update on exercise_items
for each row execute function set_updated_at();
create trigger user_profiles_set_updated_at before update on user_profiles
for each row execute function set_updated_at();
create trigger families_set_updated_at before update on families
for each row execute function set_updated_at();
create trigger child_profiles_set_updated_at before update on child_profiles
for each row execute function set_updated_at();
create trigger content_progress_set_updated_at before update on content_progress
for each row execute function set_updated_at();
create trigger achievements_set_updated_at before update on achievements
for each row execute function set_updated_at();
create trigger product_plans_set_updated_at before update on product_plans
for each row execute function set_updated_at();
create trigger subscriptions_set_updated_at before update on subscriptions
for each row execute function set_updated_at();

comment on table child_profiles is 'Pseudonymous learner profiles controlled by a family account.';
comment on table parental_consents is 'Append-only consent evidence; withdrawal creates/updates explicit state according to application policy.';
comment on table exercise_attempts is 'Detailed child learning data; retention and access require explicit policy.';
comment on table audit_logs is 'Security and operational audit trail. Never store secrets or full sensitive payloads in metadata.';

