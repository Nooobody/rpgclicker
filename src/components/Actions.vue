<template>
  <div class="actions has-text-centered">
    <div class="button" @click="attack">
      Attack!
    </div>
    <div class="button">
      Retreat!
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      attack() {
        this.$store.dispatch("playerAttacks");
      }
    }
  }
</script>

<style>
.button {
  margin-left: 10px;
}
</style>
