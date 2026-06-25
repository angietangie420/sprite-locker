/* =========================================================================
   SPRITE DATA  —  THE ONLY FILE YOU EDIT WHEN A NEW SEASON / UPDATE DROPS
   =========================================================================
   To keep the site current:
     1. Update SEASON below (name + end date).
     2. Add / remove sprites in the SPRITES list.
     3. Add / remove variants in VARIANTS if Epic changes them.
   Save the file, commit to GitHub, and the site updates automatically.
   No other file needs to change.
   ========================================================================= */

// ---- Current season banner (shown at the top of the site) ----------------
const SEASON = {
  chapter: "Chapter 7",
  season: "Season 3",
  name: "Runners",
  startDate: "2026-06-06",
  endDate: "2026-08-19",
  note: "Collect Sprites mid-match, reach an Extraction Site, and bank them to your Collection."
};

// ---- The collectible variants every sprite can come in -------------------
// Listed rarest-last. Edit here if Epic adds/removes a variant tier.
const VARIANTS = ["Normal", "Gold", "Gummy", "Galaxy"];

// ---- The full sprite list ------------------------------------------------
// rarity is used for grouping/coloring. "added" flags recent drops.
const SPRITES = [
  // --- Rare ---
  { id: "earth",       name: "Earth Sprite",       rarity: "Rare",      power: "Chance to find extra rare items when opening Chests." },
  { id: "fire",        name: "Fire Sprite",        rarity: "Rare",      power: "Creates a fiery burst when you deal enough damage." },
  { id: "water",       name: "Water Sprite",       rarity: "Rare",      power: "Replenishes shields while in water for you and nearby squad." },

  // --- Epic ---
  { id: "duck",        name: "Duck Sprite",        rarity: "Epic",      power: "Emoting or Jamming replenishes shields." },
  { id: "ghost",       name: "Ghost Sprite",       rarity: "Epic",      power: "Grants cloak for a duration upon reloading." },
  { id: "demon",       name: "Demon Sprite",       rarity: "Epic",      power: "Siphons health and shields on elimination." },
  { id: "king",        name: "King Sprite",        rarity: "Epic",      power: "Your Pickaxe deals more damage." },

  // --- Legendary ---
  { id: "dream",       name: "Dream Sprite",       rarity: "Legendary", power: "Grants a random item each level; legendary loot at Max." },
  { id: "punk",        name: "Punk Sprite",        rarity: "Legendary", power: "Mystery effect — still being discovered." },

  // --- Mythic ---
  { id: "zeropoint",   name: "Zero Point Sprite",  rarity: "Mythic",    power: "Spawns a Shield Bubble Jr. when you heal yourself." },
  { id: "burntpeanut", name: "The Burnt Peanut",   rarity: "Mythic",    power: "Special collab sprite." },

  // --- Added in the June 25, 2026 "Gone Wild" update ---
  { id: "striker",     name: "Striker Sprite",     rarity: "Epic",      power: "Triggers Overdrive when you Mantle or Hurdle.", added: "2026-06-25" },
  { id: "fishy",       name: "Fishy Sprite",       rarity: "Rare",      power: "Increases swim speed; movement boost when under fire.", added: "2026-06-25" },
  { id: "aura",        name: "Aura Sprite",        rarity: "Epic",      power: "Earn Shock Rock charges by dealing damage.", added: "2026-06-25" },
  { id: "boss",        name: "Boss Sprite",        rarity: "Legendary", power: "Boosts max health and shield. Drops from bosses.", added: "2026-06-25" },
  { id: "grim",        name: "Grim Reaper Sprite", rarity: "Mythic",    power: "Marks any player who damages you on the map.", added: "2026-06-25" }
];

// Expose to the app
window.SPRITE_DATA = { SEASON, VARIANTS, SPRITES };
