
import itemNames from '../../classes/names';

let itemSlots = Object.keys(itemNames);
const toDelete = ["weapon1h", "weapon2h", "finger", "ear"];
const toAdd = ["weaponLeft", "weaponRight", "fingerLeft", "fingerRight", "earLeft", "earRight"];

itemSlots = itemSlots.filter(v => !toDelete.includes(v));
itemSlots.push(...toAdd);

itemSlots = itemSlots.reduce((acc, cur) => {
  acc[cur] = {};
  return acc;
}, {})

export default {
  state: {
    inventory: [],
    inventorySize: 20,
    gear: itemSlots,
    gold: 0
  },
  getters: {
    armor(state) {
      return Object.values(state.gear).reduce((acc, cur) => cur && cur.armor ? acc + cur.armor : acc, 0);
    },
    damage(state) {
      return Object.values(state.gear).reduce((acc, cur) => cur && cur.dmg ? { min: acc.min + cur.dmg.min, max: acc.max + cur.dmg.max} : acc, {min: 1, max: 1});
    },
    getGearSlot(state) {
      return (item) => {
        const gearItems = Object.values(state.gear);
        const index = gearItems.findIndex(i => i.id === item.id);
        return Object.keys(state.gear)[index];
      }
    }
  },
  mutations: {
    newItem(state, item) {
      let inventory = state.inventory.slice();
      inventory.push(item);
      state.inventory = inventory;
    },
    setGear(state, {item, slot}) {
      state.gear[slot] = item;
    },
    unequipItem(state, slot) {
      state.gear[slot] = {}
    },
    removeFromInventory(state, id) {
      let inventory = state.inventory.slice();
      inventory.splice(inventory.findIndex(it => it.id === id), 1);
      inventory = inventory.filter(v => v.name);
      state.inventory = inventory;
    },
    addGold(state, gold) {
      state.gold += gold;
    }
  },
  actions: {
    playerAttacks({getters, dispatch}) {
      const dmgStats = getters.damage;

      const dmg = Math.round(dmgStats.min + Math.random() * (dmgStats.max - dmgStats.min));

      dispatch("monsterHit", dmg);
    },
    newItem({commit}, item) {
      commit("newItem", item);
    },
    unequipItem({state, commit}, slot) {
      const item = state.gear[slot];
      commit("unequipItem", slot);
      commit("newItem", item);
    },
    setItemAsGear({commit}, {item, slot}) {
      commit("setGear", {item, slot});
      commit("removeFromInventory", item.id);
      commit("draggingEnd");
    }
  }
}
