
export default {
  head: {
    type: "armor",
    names: [
      "helmet",
      "circlet",
      "coif"
    ],
    sprite: "helmet"
  },
  body: {
    type: "armor",
    names: [
      "chainmail",
      "leather armor",
      "steel armor"
    ],
    sprite: "chest"
  },
  shoulders: {
    type: "armor",
    names: [
      "leather shoulder pads",
      "pauldrons"
    ],
    sprite: "placeholder"
  },
  boots: {
    type: "armor",
    names: [
      "leather boots",
      "sandals",
      "steel boots"
    ],
    sprite: "boots"
  },
  pants: {
    type: "armor",
    names: [
      "leather pants",
      "chainmail pants",
      "steel pants"
    ],
    sprite: "pants"
  },
  bracers: {
    type: "armor",
    names: [
      "steel bracers",
      "leather bracers",
    ],
    sprite: "placeholder"
  },
  gloves: {
    type: "armor",
    names: [
      "leather gloves",
      "chainmail gloves",
      "gauntlets"
    ],
    sprite: "gloves"
  },
  weapons: [
    {
      type: "weapon",
      dmgType: "slashing",
      oneHanded: [
        "longsword",
        "scimitar",
        "saber",
        "axe"
      ],
      twoHanded: [
        "zweihander",
        "halberd",
        "battleaxe",
      ],
      sprite: "axe"
    },
    {
      type: "weapon",
      dmgType: "piercing",
      oneHanded: [
        "javelin",
        "dagger",
      ],
      twoHanded: [
        "bow",
        "crossbow"
      ],
      sprite: "dagger"
    },
    {
      type: "weapon",
      dmgType: "smashing",
      oneHanded: [
        "club",
        "mace",
        "hammer",
        "morningstar",
        "flail"
      ],
      sprite: "flail"
    },
    {
      type: "weapon",
      dmgType: "armor",
      oneHanded: [
        "shield"
      ],
      sprite: "shield"
    }
  ],
  finger: {
    type: "misc",
    names: [
      'diamond ring',
      'emerald ring',
      'alexandrite ring',
      'aquamarine ring',
      'sapphire ring',
      'pearl ring',
      'opal ring'
    ],
    sprite: "ring"
  },
  ear: {
    type: "misc",
    names: [
      'golden earring',
      'silver earring',
      'copper earring'
    ],
    sprite: "placeholder"
  },
  neck: {
    type: "misc",
    names: [
      'jade amulet',
      'ruby amulet',
      'topaz amulet'
    ],
    sprite: "necklace"
  }
}
