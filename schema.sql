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

-- A collection is visible only to its owner and to MUTUAL friends
-- (both people have added each other).
drop policy if exists "collections readable" on public.collection;
create policy "collections readable" on public.collection for select using (
  auth.uid() = user_id
  or (
    exists (select 1 from public.friends f1 where f1.user_id = auth.uid() and f1.friend_id = collection.user_id)
    and exists (select 1 from public.friends f2 where f2.user_id = collection.user_id and f2.friend_id = auth.uid())
  )
);

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

-- 5) FRIENDS: lets a user add other collectors as friends -------------
create table if not exists public.friends (
  user_id    uuid not null references auth.users(id) on delete cascade,
  friend_id  uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, friend_id)
);
alter table public.friends enable row level security;
-- You can only read friendship rows that involve you
drop policy if exists "friends readable" on public.friends;
create policy "friends readable" on public.friends
  for select using ( auth.uid() = user_id or auth.uid() = friend_id );
drop policy if exists "own friends insert" on public.friends;
create policy "own friends insert" on public.friends
  for insert with check ( auth.uid() = user_id );
drop policy if exists "own friends delete" on public.friends;
create policy "own friends delete" on public.friends
  for delete using ( auth.uid() = user_id );

-- 6) FRIEND SUGGESTIONS: mutual friends of your mutual friends -------
create or replace function public.friend_suggestions()
returns table(id uuid, username text, mutuals bigint)
language sql security definer set search_path = public as $$
  with my_mut as (
    select f.friend_id fid
    from friends f
    where f.user_id = auth.uid()
      and exists (select 1 from friends b where b.user_id = f.friend_id and b.friend_id = f.user_id)
  )
  select p.id, p.username, count(*)::bigint as mutuals
  from my_mut m
  join friends f on f.user_id = m.fid
    and exists (select 1 from friends b where b.user_id = f.friend_id and b.friend_id = f.user_id)
  join profiles p on p.id = f.friend_id
  where f.friend_id <> auth.uid()
    and not exists (
      select 1 from friends a
      where a.user_id = auth.uid() and a.friend_id = f.friend_id
        and exists (select 1 from friends bb where bb.user_id = f.friend_id and bb.friend_id = auth.uid())
    )
  group by p.id, p.username
  order by mutuals desc, p.username
  limit 12;
$$;
grant execute on function public.friend_suggestions() to authenticated;

-- 7) PROFILE EXTRAS + FOR-TRADE + MESSAGING ---------------------------
alter table public.profiles add column if not exists discord text;
alter table public.profiles add column if not exists avatar text;
alter table public.collection add column if not exists for_trade boolean not null default false;

create table if not exists public.messages (
  id bigint generated always as identity primary key,
  sender uuid not null references auth.users(id) on delete cascade,
  recipient uuid not null references auth.users(id) on delete cascade,
  body text not null,
  created_at timestamptz default now()
);
alter table public.messages enable row level security;
-- read messages you sent or received
drop policy if exists "msg read own" on public.messages;
create policy "msg read own" on public.messages for select using (
  auth.uid() = sender or auth.uid() = recipient
);
-- only send to MUTUAL friends, as yourself
drop policy if exists "msg send mutual" on public.messages;
create policy "msg send mutual" on public.messages for insert with check (
  auth.uid() = sender
  and exists (select 1 from friends f1 where f1.user_id = auth.uid() and f1.friend_id = recipient)
  and exists (select 1 from friends f2 where f2.user_id = recipient and f2.friend_id = auth.uid())
);
