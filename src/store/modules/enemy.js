
export default {
  state: {
    healthMax: 0,
    health: 0,
    name: ""
  },
  mutations: {
    healthDamage(state, dmg) {
      state.health -= dmg;
    }
  },
  actions: {
    newEnemy({state}) {
      state.name = "Monster Imp"
      state.health = 2
      state.healthMax = 2
    },
    async monsterHit({commit, dispatch, state}, dmg) {
      commit("healthDamage", dmg);
      if (state.health <= 0) {
        const item = await dispatch("generateItem", "Poor");
        dispatch("newItem", item);
        dispatch("newEnemy");
      }
    }
  }
}
