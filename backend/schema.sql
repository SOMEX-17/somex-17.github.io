-- TOPBARBERS invitation system · PostgreSQL 16+ · draft v1
-- DESIGN ONLY: not executed. Run only on an approved Russian-hosted database.
BEGIN;
CREATE TABLE invitations (
  id uuid PRIMARY KEY,
  token_hash char(64) NOT NULL UNIQUE CHECK (token_hash ~ '^[0-9a-f]{64}$'),
  label varchar(120),
  created_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL,
  revoked_at timestamptz,
  CHECK (expires_at > created_at)
);
CREATE TABLE applications (
  id uuid PRIMARY KEY,
  invitation_id uuid NOT NULL REFERENCES invitations(id),
  status varchar(24) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','submitted','in_review','approved','rejected','changes_requested','published','hidden','archived')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  submitted_at timestamptz,
  version integer NOT NULL DEFAULT 1 CHECK (version > 0)
);
CREATE TABLE profiles (
  application_id uuid PRIMARY KEY REFERENCES applications(id) ON DELETE RESTRICT,
  public_name varchar(120) NOT NULL,
  experience varchar(60) NOT NULL,
  specialization varchar(500),
  bio varchar(3000),
  booking_url varchar(2048) NOT NULL,
  private_contact varchar(320),
  CHECK (length(trim(public_name)) > 0)
);
CREATE TABLE locations (
  id uuid PRIMARY KEY,
  application_id uuid NOT NULL REFERENCES applications(id) ON DELETE RESTRICT,
  address varchar(500) NOT NULL,
  city varchar(150) NOT NULL,
  latitude numeric(9,6) CHECK (latitude BETWEEN -90 AND 90),
  longitude numeric(9,6) CHECK (longitude BETWEEN -180 AND 180),
  sort_order integer NOT NULL DEFAULT 0,
  CHECK (length(trim(address)) > 0)
);
CREATE TABLE media (
  id uuid PRIMARY KEY,
  application_id uuid NOT NULL REFERENCES applications(id) ON DELETE RESTRICT,
  private_object_key varchar(512) NOT NULL UNIQUE,
  mime_type varchar(50) NOT NULL CHECK (mime_type IN ('image/jpeg','image/png','image/webp')),
  sort_order integer NOT NULL DEFAULT 0,
  moderation_status varchar(24) NOT NULL DEFAULT 'pending' CHECK (moderation_status IN ('pending','approved','rejected')),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE consents (
  id uuid PRIMARY KEY,
  application_id uuid NOT NULL REFERENCES applications(id) ON DELETE RESTRICT,
  consent_type varchar(40) NOT NULL CHECK (consent_type IN ('processing','publication','media_rights')),
  text_version varchar(40) NOT NULL,
  accepted_at timestamptz NOT NULL,
  evidence_ref varchar(200) NOT NULL
);
CREATE TABLE moderation_events (
  id uuid PRIMARY KEY,
  application_id uuid NOT NULL REFERENCES applications(id) ON DELETE RESTRICT,
  actor_id varchar(128) NOT NULL,
  action varchar(40) NOT NULL,
  reason text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE publications (
  id uuid PRIMARY KEY,
  application_id uuid NOT NULL REFERENCES applications(id) ON DELETE RESTRICT,
  profile_version integer NOT NULL CHECK (profile_version > 0),
  published_at timestamptz NOT NULL DEFAULT now(),
  hidden_at timestamptz
);
CREATE INDEX applications_status_created_idx ON applications(status,created_at DESC);
CREATE INDEX locations_application_order_idx ON locations(application_id,sort_order);
CREATE INDEX media_application_order_idx ON media(application_id,sort_order);
CREATE INDEX moderation_events_application_time_idx ON moderation_events(application_id,created_at DESC);
COMMIT;
