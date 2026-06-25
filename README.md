# SpriteLocker — Fortnite Sprite Trade Tracker

A free website where anyone can log in, track which Sprites (and variants) they've
extracted, upload a photo/clip as proof, and browse other collectors to set up trades.
The whole site is static files hosted free on **GitHub Pages**, with a free
**Supabase** backend handling logins, the database, and file uploads.

Current season baked in: **Chapter 7 · Season 3: Runners** (ends Aug 19, 2026),
including the 5 Sprites added in the June 25 "Gone Wild" update.

---

## What's in this folder

| File | What it is |
|------|------------|
| `index.html` | The whole website (UI + logic). |
| `sprites.js` | **The only file you edit** to keep the Sprite list current. |
| `config.js` | Where you paste your 2 Supabase keys. |
| `schema.sql` | Run once in Supabase to create the database + storage. |
| `README.md` | This guide. |

---

## Setup (about 10 minutes, all free)

### 1. Create the free backend (Supabase)
1. Go to **https://supabase.com** → sign up (free) → **New project**.
2. Give it a name and a database password (save it somewhere). Wait ~2 min for it to spin up.
3. Left sidebar → **SQL Editor** → **New query** → open `schema.sql`, copy everything,
   paste it in, click **Run**. This creates the tables, security rules, and the upload bucket.
4. Left sidebar → **Project Settings** (gear) → **API**. Copy:
   - **Project URL**
   - **anon public** key
5. Open `config.js` and paste those two values in. Save.

### 2. (Optional) Turn off email confirmation for easy testing
Supabase → **Authentication** → **Providers** → **Email** → toggle **Confirm email** off
if you want people to log in instantly without checking email. Leave it on for real use.

### 3. Put it on GitHub (free hosting)
1. Go to **https://github.com** → sign in → **New repository** → name it e.g. `sprite-locker`
   → set it **Public** → Create.
2. Click **uploading an existing file** and drag in `index.html`, `sprites.js`,
   `config.js` (with your keys), and `README.md`. Commit.
3. Repo → **Settings** → **Pages** → under "Build and deployment", Source = **Deploy from a branch**,
   Branch = **main** / root → **Save**.
4. Wait ~1 minute. Your live site is at:
   `https://YOUR-USERNAME.github.io/sprite-locker/`

Share that link — anyone can sign up with their own email + password and start tracking.

---

## Keeping it current with the season

When Epic adds Sprites or a new season starts, edit **only `sprites.js`**:
- Update the `SEASON` block (name + end date).
- Add new entries to the `SPRITES` list (copy an existing line, change the `id`, `name`,
  `rarity`, `power`, and add `added: "YYYY-MM-DD"` so it shows a **New** badge).
- If Epic changes the variant tiers, edit the `VARIANTS` line.

Commit the change to GitHub and the live site updates automatically. Existing users keep
all their progress.

---

## How it works for users
- **Sign up / log in** with their own email + password.
- **My Collection**: tap a variant chip (Normal / Gold / Gummy / Galaxy) to mark it as
  collected; progress bar shows how close they are to the full set. Attach a photo or
  video clip as proof per sprite.
- **Browse Traders**: see every other collector and their progress. Click **Compare** to
  see exactly which Sprites *they have that you need* and *you have that they need* —
  instant trade matches.

## Notes
- The Sprite list is community-maintained and this is a fan project, not affiliated with Epic Games.
- The `anon` key in `config.js` is meant to be public; security is enforced by the
  rules in `schema.sql` (users can only edit their own collection).
