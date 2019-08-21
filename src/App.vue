<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <enemy></enemy>
          </div>
        </div>
        <div class="tile is-12 is-parent">
          <div class="tile is-child box">
            <actions></actions>
          </div>
        </div>
      </div>
      <div class="tile is-4">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <div class="title has-text-centered">Inventory</div>
            <inventory></inventory>
          </div>
        </div>
      </div>
      <div class="tile is-4">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <div class="title has-text-centered">Gear</div>
            <gear></gear>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Enemy from './components/Enemy.vue'
import Gear from './components/Gear.vue'
import Actions from './components/Actions.vue'
import Inventory from './components/Inventory.vue'

export default {
  name: 'app',
  components: {
    Enemy,
    Actions,
    Inventory,
    Gear
  },
  created() {
    this.$store.dispatch("newEnemy");
  }
}
</script>

<style lang="scss">
@import "bulma/bulma.sass";
@import "./sprites.scss";

body, html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}
</style>
