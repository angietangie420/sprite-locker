/* =========================================================================
   SPRITE DATA  —  THE ONLY FILE YOU EDIT WHEN A NEW SEASON / UPDATE DROPS
   =========================================================================
   Images load straight from fortnite.gg, so they stay correct automatically.
   To add a new sprite or variant: copy a block below, change the name and the
   "f" image filename (grab it from fortnite.gg/sprites), then commit.
   ========================================================================= */

const SEASON = {
  chapter: "Chapter 7",
  season: "Season 3",
  name: "Runners",
  endDate: "2026-08-19",
  note: "Tick off every Sprite variant you've collected and compare with other players to trade."
};

const IMG_BASE = "https://fortnite.gg/img/x/sprites/icons/";
const VARIANT_ORDER = ["Base", "Gold", "Gummy", "Galaxy", "Gem", "Holofoil"];

const SPRITES = [
  { id:"water", name:"Water Sprite", rarity:"rare", power:"Replenishes shields while in water for you and nearby squad.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Water_Unvault_Ch7S3_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Water_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Water_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Water_Galaxy_ui_L.webp"},
    {v:"Gem", f:"T_Icon_BR_Creature_Sprite_Water_Gem_ui_L.webp"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Water_Holofoil_ui_L.webp"} ]},
  { id:"earth", name:"Earth Sprite", rarity:"rare", power:"Chance to find extra rare items when opening Chests.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Earth_Ch7S3_UI_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Earth_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Earth_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Earth_Galaxy_ui_L.webp"},
    {v:"Gem", f:"T_Icon_BR_Creature_Sprite_Earth_Gem_ui_L.webp"} ]},
  { id:"fire", name:"Fire Sprite", rarity:"rare", power:"Creates a fiery burst when you deal enough damage.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Fire_Unvault_Ch7S3_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Fire_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Fire_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Fire_Galaxy_ui_L.webp"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Fire_Holofoil_ui_L.webp"} ]},
  { id:"duck", name:"Duck Sprite", rarity:"epic", power:"Emoting or Jamming replenishes shields.", variants:[
    {v:"Base", f:"T_Icon_BR_Duck_Default_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Duck_Gold_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Duck_Candy_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Duck_Galaxy_L.webp"},
    {v:"Gem", f:"T_Icon_BR_Duck_Gem_L.webp"} ]},
  { id:"ghost", name:"Ghost Sprite", rarity:"epic", power:"Grants cloak for a duration upon reloading.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Ghost_Unvault_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Ghost_Gold_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Ghost_Candy_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Ghost_Galaxy_L.webp"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Ghost_Holo_L.webp"} ]},
  { id:"dream", name:"Dream Sprite", rarity:"legendary", power:"Grants a random item each level; legendary loot at Max.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Sleepy_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Sleepy_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Sleepy_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Sleepy_Galaxy_ui_L.webp"} ]},
  { id:"demon", name:"Demon Sprite", rarity:"epic", power:"Siphons health and shields on elimination.", variants:[
    {v:"Base", f:"T_Icon_BR_RedDemon_Default_L.webp"},
    {v:"Gold", f:"T_Icon_BR_RedDemon_Gold_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_RedDemon_Candy_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_RedDemon_Galaxy_L.webp"},
    {v:"Gem", f:"T_Icon_BR_RedDemon_Gem_L.webp"} ]},
  { id:"punk", name:"Punk Sprite", rarity:"legendary", power:"Mystery effect — still being discovered.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Punk_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Punk_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Punk_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Punk_Galaxy_ui_L.webp"} ]},
  { id:"king", name:"King Sprite", rarity:"epic", power:"Your Pickaxe deals more damage.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_King_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_King_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_King_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_King_Galaxy_ui_L.webp"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_King_Holofoil_ui_L.webp"} ]},
  { id:"burntpeanut", name:"Burnt Peanut", rarity:"mythic", power:"Special collab sprite.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_BurntPeanut_ui_L.webp"} ]},
  { id:"zeropoint", name:"Zero Point Sprite", rarity:"mythic", power:"Spawns a Shield Bubble Jr. when you heal yourself.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_Galaxy_ui_L.webp"},
    {v:"Gem", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_Gem_ui_L.webp"} ]},
  { id:"fishy", name:"Fishy Sprite", rarity:"rare", power:"Increases swim speed; movement boost when under fire.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Fishy_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Fishy_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Fishy_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Fishy_Galaxy_ui_L.webp"} ]},
  { id:"striker", name:"Striker Sprite", rarity:"epic", power:"Triggers Overdrive when you Mantle or Hurdle.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Soccer_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Soccer_Gold_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Soccer_Candy_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Soccer_Galaxy_L.webp"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Soccer_Holofoil_L.webp"} ]},
  { id:"aura", name:"Aura Sprite", rarity:"epic", power:"Earn Shock Rock charges by dealing damage.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Drifter_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Drifter_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Drifter_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Drifter_Galaxy_ui_L.webp"},
    {v:"Gem", f:"T_Icon_BR_Creature_Sprite_Drifter_Gem_ui_L.webp"} ]},
  { id:"boss", name:"Boss Sprite", rarity:"legendary", power:"Boosts max health and shield. Drops from bosses.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Boss_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Boss_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Boss_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Boss_Galaxy_ui_L.webp"} ]},
  { id:"grim", name:"Grim Reaper Sprite", rarity:"mythic", power:"Marks any player who damages you on the map.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_GrimReaper_Default_L.webp"},
    {v:"Gold", f:"T_Icon_BR_GrimReaper_Gold_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_GrimReaper_Candy_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_GrimReaper_Galaxy_L.webp"} ]},
  { id:"air", name:"Air Sprite", rarity:"rare", power:"Air Sprite.", variants:[
    {v:"Base", f:"T_Icon_BR_Air_Default_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Air_Gold_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Air_Candy_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Air_Galaxy_L.webp"},
    {v:"Holofoil", f:"T_Icon_BR_Air_Holo_L.webp"} ]},
  { id:"seven", name:"Seven Sprite", rarity:"legendary", power:"Seven Sprite.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Seven_ui_L.webp"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Seven_Gold_ui_L.webp"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Seven_Candy_ui_L.webp"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Seven_Galaxy_ui_L.webp"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Seven_Holofoil_ui_L.webp"} ]}
];

window.SPRITE_DATA = { SEASON, IMG_BASE, VARIANT_ORDER, SPRITES };
