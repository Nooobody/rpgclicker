
export default class Item {

  constructor(data) {
    this.id = data.id;
    this.adjective = data.adjective;
    this.slot = data.slot;
    this.type = data.type;
    this.tier = data.tier;
    this.name = data.name;
    this.dmg = data.dmg;
    this.armor = data.armor;
    this.modifier = data.modifierName;
    this.sprite = data.sprite;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  toString() {
    let str = this.capitalize(this.adjective) + " " + this.name;

    if (this.modifier) {
      str += " of the " + this.modifier;
    }

    return str;
  }
}
