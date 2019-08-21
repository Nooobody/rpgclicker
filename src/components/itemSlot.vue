<template>
  <drop class="itemSlot box" :class="isCompatible ? 'has-background-primary' : ''" @drop="handleDrop">
    <drag :transfer-data="item" v-if="item && item.name">
      <div class="itemInSlot" @mouseover="hoverEnter" @mouseout="hoverLeave">
        <div class="sprite" :class="`sprite-${item.sprite}`"></div>
      </div>
    </drag>
    <div class="itemSlotEmpty icon" v-else-if="itemSlot !== 'Left Hand' && itemSlot !== 'Right Hand'" @mouseover="hoverEnter" @mouseout="hoverLeave">
      <font-awesome-icon icon="times"></font-awesome-icon>
    </div>
    <div class="sprite sprite-fists" v-else @mouseover="hoverEnter" @mouseout="hoverLeave"></div>
    <div class="hoverBox box" :class="{ 'enabled': hovered }">
      <div v-if="item && item.name">
        <p class="has-text-weight-bold">
          {{item.toString()}}
        </p>
        <p>{{item.tier}}</p>
        <p v-if="item.dmg">Damage: {{item.dmg.min}} - {{item.dmg.max}}</p>
        <p v-else>Armor: {{item.armor}}</p>
      </div>
      <div v-else>
        {{itemSlot}} - Empty
      </div>
    </div>
  </drop>
</template>

<script>
  export default {
    props: ['item', 'itemSlot', 'compatible'],
    data() {
      return {
        hovered: false
      }
    },
    computed: {
      dragging() {
        return this.$store.state.item.dragging;
      },
      isCompatible() {
        return this.dragging && this.dragging.slot === this.compatible;
      }
    },
    methods: {
      hoverEnter() {
        this.hovered = true;
      },
      hoverLeave() {
        this.hovered = false;
      },
      getSlotName() {
        switch (this.compatible) {
          case "weapons":
            return "weapon" + this.itemSlot.split(" ")[0]
          case "ear":
          case "finger":
            return this.compatible + this.itemSlot.split(" ")[0]
          default:
            return this.compatible;
        }
      },
      handleDrop(data) {
        if (this.dragging && data.slot === this.compatible) {
          if (this.item) {
            this.$store.dispatch("unequipItem", this.getSlotName());
          }
          this.$store.dispatch("setItemAsGear", {
            item: data,
            slot: this.getSlotName()
          });
        }
      }
    }
  }
</script>

<style scoped>
.itemSlot {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.itemSlot .sprite {
  position: relative;
  left: -16px;
  top: -16px;
}

.icon {
  width: 100%;
  height: 100%;
  font-size: 40px;
  color: #dddddd;
}

.hoverBox {
  display: none;
  position: absolute;
  right: 120%;
  top: 0px;
  width: 300px;
  padding: 10px;
  font-size: 14px;
  z-index: 100;
}
.hoverBox.enabled {
  display: initial;
}
</style>
