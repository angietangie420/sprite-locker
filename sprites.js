/* =========================================================================
   SPRITE DATA  —  THE ONLY FILE YOU EDIT WHEN A NEW SEASON / UPDATE DROPS
   =========================================================================
   Images + drop chances come from fortnite.gg/sprites.
   Each variant:  v = variant label, f = image filename, d = drop chance.
   To add a new sprite/variant: copy a block, change the name, f and d.
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

// rarity = overall sprite rarity. drop chances (d) are per-variant.
const SPRITES = [
  { id:"water", name:"Water Sprite", rarity:"rare", power:"A starter Sprite. Replenishes shields while you're in water for you and your nearby squad.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Water_Unvault_Ch7S3_ui_L.webp", d:"8.88%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Water_Gold_ui_L.webp", d:"0.7%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Water_Candy_ui_L.webp", d:"4.23%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Water_Galaxy_ui_L.webp", d:"0.28%"},
    {v:"Gem", f:"T_Icon_BR_Creature_Sprite_Water_Gem_ui_L.webp", d:"unreleased"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Water_Holofoil_ui_L.webp", d:"unreleased"} ]},
  { id:"earth", name:"Earth Sprite", rarity:"rare", power:"A starter Sprite. Gives you a chance to find extra rare items when opening Chests.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Earth_Ch7S3_UI_L.webp", d:"8.88%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Earth_Gold_ui_L.webp", d:"0.7%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Earth_Candy_ui_L.webp", d:"4.23%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Earth_Galaxy_ui_L.webp", d:"0.28%"},
    {v:"Gem", f:"T_Icon_BR_Creature_Sprite_Earth_Gem_ui_L.webp", d:"unreleased"} ]},
  { id:"fire", name:"Fire Sprite", rarity:"rare", power:"A starter Sprite. Creates a fiery burst when you deal enough damage to an enemy.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Fire_Unvault_Ch7S3_ui_L.webp", d:"8.88%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Fire_Gold_ui_L.webp", d:"0.7%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Fire_Candy_ui_L.webp", d:"4.23%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Fire_Galaxy_ui_L.webp", d:"0.28%"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Fire_Holofoil_ui_L.webp", d:"unreleased"} ]},
  { id:"duck", name:"Duck Sprite", rarity:"epic", power:"Emoting or Jamming replenishes your shields.", variants:[
    {v:"Base", f:"T_Icon_BR_Duck_Default_L.webp", d:"4.04%"},
    {v:"Gold", f:"T_Icon_BR_Duck_Gold_L.webp", d:"0.05%"},
    {v:"Gummy", f:"T_Icon_BR_Duck_Candy_L.webp", d:"1.76%"},
    {v:"Galaxy", f:"T_Icon_BR_Duck_Galaxy_L.webp", d:"0.02%"},
    {v:"Gem", f:"T_Icon_BR_Duck_Gem_L.webp", d:"unreleased"} ]},
  { id:"ghost", name:"Ghost Sprite", rarity:"epic", power:"Grants cloak for a short duration whenever you reload.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Ghost_Unvault_L.webp", d:"4.04%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Ghost_Gold_L.webp", d:"0.05%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Ghost_Candy_L.webp", d:"1.76%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Ghost_Galaxy_L.webp", d:"0.02%"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Ghost_Holo_L.webp", d:"unreleased"} ]},
  { id:"dream", name:"Dream Sprite", rarity:"legendary", power:"Grants a random item at each level, exploding with legendary loot at Max Level.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Sleepy_ui_L.webp", d:"1.85%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Sleepy_Gold_ui_L.webp", d:"0.02%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Sleepy_Candy_ui_L.webp", d:"0.81%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Sleepy_Galaxy_ui_L.webp", d:"0.01%"} ]},
  { id:"demon", name:"Demon Sprite", rarity:"epic", power:"Siphons some health and shields whenever you eliminate an opponent.", variants:[
    {v:"Base", f:"T_Icon_BR_RedDemon_Default_L.webp", d:"4.06%"},
    {v:"Gold", f:"T_Icon_BR_RedDemon_Gold_L.webp", d:"0.05%"},
    {v:"Gummy", f:"T_Icon_BR_RedDemon_Candy_L.webp", d:"1.76%"},
    {v:"Galaxy", f:"T_Icon_BR_RedDemon_Galaxy_L.webp", d:"unreleased"},
    {v:"Gem", f:"T_Icon_BR_RedDemon_Gem_L.webp", d:"unreleased"} ]},
  { id:"punk", name:"Punk Sprite", rarity:"legendary", power:"Mystery effect — still being discovered by the community.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Punk_ui_L.webp", d:"1.39%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Punk_Gold_ui_L.webp", d:"0.02%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Punk_Candy_ui_L.webp", d:"0.61%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Punk_Galaxy_ui_L.webp", d:"unreleased"} ]},
  { id:"king", name:"King Sprite", rarity:"epic", power:"Your Pickaxe deals more damage.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_King_ui_L.webp", d:"4.04%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_King_Gold_ui_L.webp", d:"0.05%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_King_Candy_ui_L.webp", d:"1.76%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_King_Galaxy_ui_L.webp", d:"0.02%"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_King_Holofoil_ui_L.webp", d:"unreleased"} ]},
  { id:"burntpeanut", name:"Burnt Peanut", rarity:"mythic", power:"A rare mythic collab Sprite.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_BurntPeanut_ui_L.webp", d:"1.01%"} ]},
  { id:"zeropoint", name:"Zero Point Sprite", rarity:"mythic", power:"Spawns a Shield Bubble Jr. whenever you use a healing item on yourself. Extremely rare.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_ui_L.webp", d:"0.000069%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_Gold_ui_L.webp", d:"0.0000008%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_Candy_ui_L.webp", d:"0.00003%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_Galaxy_ui_L.webp", d:"0.0000003%"},
    {v:"Gem", f:"T_Icon_BR_Creature_Sprite_ZeroPoint_Gem_ui_L.webp", d:"unreleased"} ]},
  { id:"fishy", name:"Fishy Sprite", rarity:"rare", power:"Increases your swim speed, with an extra movement boost when you're under fire.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Fishy_ui_L.webp", d:"13.79%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Fishy_Gold_ui_L.webp", d:"0.17%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Fishy_Candy_ui_L.webp", d:"0.08%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Fishy_Galaxy_ui_L.webp", d:"0.06%"} ]},
  { id:"striker", name:"Striker Sprite", rarity:"epic", power:"Triggers Overdrive whenever you Mantle over a ledge or Hurdle an obstacle. Unlock by scoring a goal at the Soccer Pitch.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Soccer_ui_L.webp", d:"5.74%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Soccer_Gold_L.webp", d:"0.07%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Soccer_Candy_L.webp", d:"0.04%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Soccer_Galaxy_L.webp", d:"0.02%"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Soccer_Holofoil_L.webp", d:"unreleased"} ]},
  { id:"aura", name:"Aura Sprite", rarity:"epic", power:"Earn Shock Rock charges by dealing damage, creating extra offensive opportunities.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Drifter_ui_L.webp", d:"5.74%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Drifter_Gold_ui_L.webp", d:"0.07%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Drifter_Candy_ui_L.webp", d:"0.04%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Drifter_Galaxy_ui_L.webp", d:"0.02%"},
    {v:"Gem", f:"T_Icon_BR_Creature_Sprite_Drifter_Gem_ui_L.webp", d:"unreleased"} ]},
  { id:"boss", name:"Boss Sprite", rarity:"legendary", power:"Boosts your max health and shield. Drops from boss defeats with no guaranteed rate.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Boss_ui_L.webp", d:"2.63%"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Boss_Gold_ui_L.webp", d:"0.03%"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Boss_Candy_ui_L.webp", d:"0.02%"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Boss_Galaxy_ui_L.webp", d:"0.01%"} ]},
  { id:"grim", name:"Grim Reaper Sprite", rarity:"mythic", power:"Marks any player who damages you on the map, revealing their exact location. Extremely rare.", added:"2026-06-25", variants:[
    {v:"Base", f:"T_Icon_BR_GrimReaper_Default_L.webp", d:"0.000098%"},
    {v:"Gold", f:"T_Icon_BR_GrimReaper_Gold_L.webp", d:"0.0000012%"},
    {v:"Gummy", f:"T_Icon_BR_GrimReaper_Candy_L.webp", d:"0.0000006%"},
    {v:"Galaxy", f:"T_Icon_BR_GrimReaper_Galaxy_L.webp", d:"0.0000004%"} ]},
  { id:"air", name:"Air Sprite", rarity:"rare", power:"An unreleased Air Sprite — not yet obtainable in-game.", variants:[
    {v:"Base", f:"T_Icon_BR_Air_Default_L.webp", d:"unreleased"},
    {v:"Gold", f:"T_Icon_BR_Air_Gold_L.webp", d:"unreleased"},
    {v:"Gummy", f:"T_Icon_BR_Air_Candy_L.webp", d:"unreleased"},
    {v:"Galaxy", f:"T_Icon_BR_Air_Galaxy_L.webp", d:"unreleased"},
    {v:"Holofoil", f:"T_Icon_BR_Air_Holo_L.webp", d:"unreleased"} ]},
  { id:"seven", name:"Seven Sprite", rarity:"legendary", power:"An unreleased Seven Sprite — not yet obtainable in-game.", variants:[
    {v:"Base", f:"T_Icon_BR_Creature_Sprite_Seven_ui_L.webp", d:"unreleased"},
    {v:"Gold", f:"T_Icon_BR_Creature_Sprite_Seven_Gold_ui_L.webp", d:"unreleased"},
    {v:"Gummy", f:"T_Icon_BR_Creature_Sprite_Seven_Candy_ui_L.webp", d:"unreleased"},
    {v:"Galaxy", f:"T_Icon_BR_Creature_Sprite_Seven_Galaxy_ui_L.webp", d:"unreleased"},
    {v:"Holofoil", f:"T_Icon_BR_Creature_Sprite_Seven_Holofoil_ui_L.webp", d:"unreleased"} ]}
];

window.SPRITE_DATA = { SEASON, IMG_BASE, VARIANT_ORDER, SPRITES };
