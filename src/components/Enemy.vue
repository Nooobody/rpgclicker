<template>
  <div class="enemyScreen">
    <div class="title has-text-centered">
      {{ enemy.name }}
    </div>
    <p class="has-text-centered has-text-weight-bold">Health {{ enemy.health }}</p>
    <progress class="progress is-danger" :value="health" max="100">
      {{ health }}%
    </progress>
  </div>
</template>

<script>
  export default {
    computed: {
      enemy() {
        return this.$store.state.enemy;
      },
      health() {
        return (this.enemy.health / this.enemy.healthMax) * 100 || 0;
      }
    }
  }
</script>

<style>

</style>
