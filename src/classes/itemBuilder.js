import items from './names';

export default class ItemBuilder {

  tiers = {
    Poor: {
      damage: {
        min: 1,
        max: 4
      },
      armor: 2
    },
    Common: {
      damage: {
        min: 3,
        max: 7
      },
      armor: 6
    },
    Uncommon: {
      damage: {
        min: 6,
        max: 10
      },
      armor: 13
    },
    Special: {
      damage: {
        min: 12,
        max: 18
      },
      armor: 30
    },
    Rare: {
      damage: {
        min: 30,
        max: 60
      },
      armor: 70
    },
    Epic: {
      damage: {
        min: 120,
        max: 160
      },
      armor: 150
    },
    Heroic: {
      damage: {
        min: 300,
        max: 420
      },
      armor: 400
    },
    Artifact: {
      damage: {
        min: 1200,
        max: 1600
      },
      armor: 1500
    },
    Legendary: {
      damage: {
        min: 4020,
        max: 6000,
      },
      armor: 5200
    },
    Mythic: {
      damage: {
        min: 14000,
        max: 32000
      },
      armor: 24000
    },
    Ancient: {
      damage: {
        min: 53000,
        max: 92000
      },
      armor: 77750
    },
    Unreal: {
      damage: {
        min: 360000,
        max: 720000
      },
      armor: 523000
    },
    Transcended: {
      damage: {
        min: 6100000,
        max: 21000000
      },
      armor: 12000000
    },
    Ultimate: {
      damage: {
        min: 123 * 1000 * 1000,
        max: 614 * 1000 * 1000
      },
      armor: 170 * 1000 * 1000
    },
  }

  adjectives = [
    "attractive",
    "clean",
    "dazzling",
    "elegant",
    "fancy",
    "magnificent",
    "plain",
    "faithful",
    "nice",
    "fierce",
    "mysterious",
    "repulsive",
    "great",
    "large",
    "little",
    "massive",
    "puny",
    "short",
    "tiny",
    "odd",
    "broad",
    "crooked",
    "curved",
    "hollow",
    "refined",
    "round",
    "wide",
    "disgusting",
    "salty",
    "chilly",
    "damaged",
    "dirty",
    "greasy",
    "loose",
    "sharp",
    "sticky",
    "uneven"
  ]

  modifierNames = [
    "alligator",
    "crocodile",
    "alpaca",
    "ant",
    "antelope",
    "ape",
    "armadillo",
    "donkey",
    "badger",
    "bat",
    "bear",
    "beaver",
    "bee",
    "beetle",
    "buffalo",
    "butterfly",
    "cat",
    "cattle",
    "cheetah",
    "coyote",
    "deer",
    "crow",
    "duck",
    "dolphin",
    "eagle",
    "elephant",
    "fish",
    "frog",
    "toad",
    "giraffe",
    "gorilla",
    "hamster",
    "hornet",
    "horse",
    "hyena",
    "lion",
    "mammoth",
    "monkey",
    "rat",
    "panda",
    "rabbit",
    "sheep",
    "wolf",
    "squirrel",
    "zebra"
  ]

  modifiers = [
    {
      damage: {
        add: 6
      },
      armor: {
        sub: 4
      }
    },
    {
      damage: {
        sub: 4
      },
      armor: {
        add: 6
      }
    },
    {
      damage: {
        add: 10
      },
      armor: {
        sub: 8
      }
    },
    {
      damage: {
        sub: 8
      },
      armor: {
        add: 10
      }
    },
    {
      damage: {
        add: 5
      },
      armor: {
        add: 5
      }
    },
    {
      damage: {
        sub: 5
      },
      armor: {
        sub: 5
      }
    }
  ]

  pickRandom(arr) {
    if (arr.length) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    else {
      let keys = Object.keys(arr);
      return this.pickRandom(keys);
    }
  }

  calculateDamage(tier, modifier) {
    let tierStats = this.tiers[tier].damage;

    const baseMinInterval = Math.random() * 2 - 1;
    tierStats.min += tierStats.min * baseMinInterval / 100;

    const baseMaxInterval = Math.random() * 2 - 1;
    tierStats.max += tierStats.max * baseMaxInterval / 100;

    if (modifier) {
      const modifierInterval = modifier.damage.add ? Math.random() * modifier.damage.add : Math.random() * modifier.damage.sub * -1;
      tierStats.min += tierStats.min * modifierInterval / 100;
      tierStats.max += tierStats.max * modifierInterval / 100;
    }

    return {
      min: Math.floor(tierStats.min),
      max: Math.floor(tierStats.max)
    }
  }

  calculateArmor(tier, modifier) {
    let tierArmor = this.tiers[tier].armor;

    const baseInterval = Math.random() * 2 - 1;
    tierArmor += tierArmor * baseInterval / 100;

    if (modifier) {
      const modifierInterval = modifier.damage.add ? Math.random() * modifier.damage.add : Math.random() * modifier.damage.sub * -1;
      tierArmor += tierArmor * modifierInterval / 100;
    }

    return Math.round(tierArmor);
  }

  UUID = 1

  generateItem(tier) {
    let item = {};

    item.id = this.UUID;
    this.UUID += 1;

    if (tier) {
      item.tier = tier;
    }
    else {
      item.tier = this.pickRandom(this.tiers);
    }

    item.adjective = this.pickRandom(this.adjectives);

    if (Math.random() > 0.5) {
      item.modifierName = this.pickRandom(this.modifierNames);
      item.modifier = this.pickRandom(this.modifiers);
    }

    item.slot = this.pickRandom(items);

    if (item.slot === "weapons") {
      item.weaponType = this.pickRandom(items[item.slot]);
      item.type = Math.random() > 0.7 && item.weaponType.twoHanded ? "weapon_twohanded" : "weapon_onehanded";
      item.name = item.type === "weapon_twohanded" ? this.pickRandom(item.weaponType.twoHanded) : this.pickRandom(item.weaponType.oneHanded);
      item.sprite = item.weaponType.sprite;
      if (item.weaponType.dmgType === "armor") {
        item.armor = this.calculateArmor(item.tier, item.modifier);
      }
      else {
        item.dmg = this.calculateDamage(item.tier, item.modifier);
      }
    }
    else {
      item.type = items[item.slot].type;
      item.sprite = items[item.slot].sprite;
      item.name = this.pickRandom(items[item.slot].names);
      item.armor = this.calculateArmor(item.tier, item.modifier);
    }
    return item;
  }
}
