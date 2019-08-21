<template>
  <div class="inventory">
    <div class="box is-inline-flex" v-for="i in inventorySize" :key="i">
      <drag @dragstart="dragStart(inventory[i - 1])" @dragend="dragEnd" v-if="inventory[i - 1]" :transfer-data="inventory[i - 1]">
        <div :class="`sprite sprite-${inventory[i - 1].sprite} inventoryItem`" @mouseover="hoverEnter(inventory[i - 1])" @mouseout="hoverLeave">
        </div>
        <div class="hoverBox box" v-if="hovered === inventory[i - 1]">
          <p class="has-text-weight-bold">
            {{hovered.toString()}}
          </p>
          <p>{{hovered.tier}}</p>
          <p v-if="hovered.dmg">Damage: {{hovered.dmg.min}} - {{hovered.dmg.max}}</p>
          <p v-else>Armor: {{hovered.armor}}</p>
        </div>
      </drag>
      <drop @drop="handleDrop" v-else>
        <div class="sprite sprite-empty">
        </div>
      </drop>
    </div>
    <p>Gold: {{gold}}</p>
    <drop @drop="sellItem">
      <div class="box">Sell the item</div>
    </drop>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hovered: undefined
      }
    },
    computed: {
      inventory() {
        return this.$store.state.character.inventory;
      },
      inventorySize() {
        return this.$store.state.character.inventorySize;
      },
      gold() {
        return this.$store.state.character.gold;
      }
    },
    methods: {
      dragStart(item) {
        this.$store.commit("draggingStart", item);
      },
      dragEnd() {
        this.$store.commit("draggingEnd");
      },
      hoverEnter(item) {
        this.hovered = item;
      },
      hoverLeave() {
        this.hovered = undefined;
      },
      handleDrop(data) {
        const slot = this.$store.getters.getGearSlot(data);
        this.$store.dispatch("unequipItem", slot);
      },
      sellItem(data) {
        this.$store.dispatch("sellItem", data);
      }
    }
  }
</script>

<style>
.inventory {
  width: 100%;
  position: relative;
}
.inventory .box {
  margin-left: 12px;
  padding: 4px;
}

.inventoryItem {
  cursor: pointer;
}
.inventoryItem:hover {
  filter: brightness(2);
}

.hoverBox {
  position: absolute;
  right: 100%;
  top: 0px;
  width: 300px;
  padding: 16px;
  font-size: 14px;
  z-index: 100;
}
</style>
