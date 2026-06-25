-- =====================================================================
--  SPRITE LOCKER — SUPABASE DATABASE SETUP
-- =====================================================================
--  Run this ONCE in your Supabase project:
--    Supabase dashboard -> SQL Editor -> New query -> paste all of this
--    -> click "Run".
--  It creates the tables, security rules, and storage bucket the site needs.
-- =====================================================================

-- 1) PROFILES: one row per user (their public display name) ------------
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  username   text unique not null,
  created_at timestamptz default now()
);

-- 2) COLLECTION: which sprite+variant each user owns, with proof -------
create table if not exists public.collection (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  sprite_id  text not null,
  variant    text not null,
  owned      boolean not null default true,
  media_url  text,
  updated_at timestamptz default now(),
  unique (user_id, sprite_id, variant)
);

-- 3) ROW LEVEL SECURITY -----------------------------------------------
alter table public.profiles   enable row level security;
alter table public.collection enable row level security;

-- Everyone signed in can READ all profiles & collections (needed for trade browsing)
drop policy if exists "profiles readable" on public.profiles;
create policy "profiles readable" on public.profiles
  for select using ( auth.role() = 'authenticated' );

drop policy if exists "collections readable" on public.collection;
create policy "collections readable" on public.collection
  for select using ( auth.role() = 'authenticated' );

-- You can only INSERT/UPDATE/DELETE your OWN profile
drop policy if exists "own profile insert" on public.profiles;
create policy "own profile insert" on public.profiles
  for insert with check ( auth.uid() = id );
drop policy if exists "own profile update" on public.profiles;
create policy "own profile update" on public.profiles
  for update using ( auth.uid() = id );

-- You can only INSERT/UPDATE/DELETE your OWN collection rows
drop policy if exists "own collection insert" on public.collection;
create policy "own collection insert" on public.collection
  for insert with check ( auth.uid() = user_id );
drop policy if exists "own collection update" on public.collection;
create policy "own collection update" on public.collection
  for update using ( auth.uid() = user_id );
drop policy if exists "own collection delete" on public.collection;
create policy "own collection delete" on public.collection
  for delete using ( auth.uid() = user_id );

-- 4) STORAGE BUCKET for the photo/video proof -------------------------
insert into storage.buckets (id, name, public)
values ('sprite-proof', 'sprite-proof', true)
on conflict (id) do nothing;

-- Anyone signed in can view proof; you can only upload to your own folder
drop policy if exists "proof readable" on storage.objects;
create policy "proof readable" on storage.objects
  for select using ( bucket_id = 'sprite-proof' );

drop policy if exists "proof upload own" on storage.objects;
create policy "proof upload own" on storage.objects
  for insert with check (
    bucket_id = 'sprite-proof'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "proof update own" on storage.objects;
create policy "proof update own" on storage.objects
  for update using (
    bucket_id = 'sprite-proof'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
