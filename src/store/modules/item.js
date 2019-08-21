
import ItemBuilder from "../../classes/itemBuilder";
import Item from "../../classes/item";

export default {
  state: {
    builder: new ItemBuilder(),
    dragging: undefined
  },
  mutations: {
    draggingStart(state, item) {
      state.dragging = item;
    },
    draggingEnd(state) {
      state.dragging = undefined;
    }
  },
  actions: {
    generateItem({state}, tier) {
      const itemStats = state.builder.generateItem(tier);
      const item = new Item(itemStats);
      return item;
    },
    sellItem({commit, getters}, item) {
      let slot = getters.getGearSlot(item);
      if (slot) {
        commit("unequipItem", slot);
      }
      else {
        commit("removeFromInventory", item.id);
      }
      const gold = Math.random() * 10;
      commit("addGold", Math.floor(gold))
    }
  }
}
