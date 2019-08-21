<template>
  <div class="gear">
    <div class="stats">
      <p>
        Weapon: {{ mainWeapon }}
      </p>
      <p>
        Damage: {{ dmg.min }} - {{ dmg.max }}
      </p>
      <p>
        Armor: {{ armor }}
      </p>
    </div>
    <div class="gearSlots">
      <div class="itemSlotLocation itemSlotLocationHead">
        <item-slot itemSlot="Head" compatible="head" :item="gear.head"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationShoulders">
        <item-slot itemSlot="Shoulders" compatible="shoulders" :item="gear.shoulders"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationBracers">
        <item-slot itemSlot="Bracers" compatible="bracers" :item="gear.bracers"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationGloves">
        <item-slot itemSlot="Gloves" compatible="gloves" :item="gear.gloves"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationChest">
        <item-slot itemSlot="Chest" compatible="body" :item="gear.body"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationPants">
        <item-slot itemSlot="Pants" compatible="pants" :item="gear.pants"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationBoots">
        <item-slot itemSlot="Boots" compatible="boots" :item="gear.boots"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationLeftHand">
        <item-slot itemSlot="Left Hand" compatible="weapons" :item="gear.weaponLeft"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationRightHand">
        <item-slot itemSlot="Right Hand" compatible="weapons" :item="gear.weaponRight"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationNecklace">
        <item-slot itemSlot="Necklace" compatible="neck" :item="gear.neck"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationLeftFinger">
        <item-slot itemSlot="Left Ring" compatible="finger" :item="gear.fingerLeft"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationRightFinger">
        <item-slot itemSlot="Right Ring" compatible="finger" :item="gear.fingerRight"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationLeftEar">
        <item-slot itemSlot="Left Earring" compatible="ear" :item="gear.earLeft"></item-slot>
      </div>
      <div class="itemSlotLocation itemSlotLocationRightEar">
        <item-slot itemSlot="Right Earring" compatible="ear" :item="gear.earRight"></item-slot>
      </div>
    </div>
  </div>
</template>

<script>
import ItemSlot from "./itemSlot"
export default {
  components: {
    ItemSlot
  },
  computed: {
    gear() {
      return this.$store.state.character.gear;
    },
    mainWeapon() {
      return this.gear.weaponLeft && this.gear.weaponLeft.name || "fists";
    },
    dmg() {
      return this.$store.getters.damage;
    },
    armor() {
      return this.$store.getters.armor;
    }
  }
}
</script>

<style scoped>
.gear {
  width: 100%;
  height: 60vh;
  position: relative;
}

.stats {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.itemSlotLocation {
  position: absolute;
}

.itemSlotLocationHead {
  left: calc(50% - 20px);
  top: 2%;
}

.itemSlotLocationShoulders {
  left: 20%;
  top: 6%;
}

.itemSlotLocationNecklace {
  right: 20%;
  top: 6%;
}

.itemSlotLocationGloves {
  left: 10%;
  top: 20%;
}

.itemSlotLocationBracers {
  right: 10%;
  top: 20%;
}

.itemSlotLocationLeftHand {
  left: 2%;
  top: 40%;
}

.itemSlotLocationRightHand {
  right: 2%;
  top: 40%;
}

.itemSlotLocationChest {
  left: calc(50% - 20px);
  top: 20%;
}

.itemSlotLocationLeftFinger {
  left: 30%;
  top: 35%;
}

.itemSlotLocationRightFinger {
  right: 30%;
  top: 35%;
}

.itemSlotLocationLeftEar {
  left: 30%;
  top: 45%;
}

.itemSlotLocationRightEar {
  right: 30%;
  top: 45%;
}

.itemSlotLocationPants {
  left: calc(50% - 20px);
  top: 54%;
}

.itemSlotLocationBoots {
  left: calc(50% - 20px);
  top: 66%;
}


</style>
