import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [
      {id: 2, name: 'Halk', hands: {left: 0, right: 0}, params: {health: 100, stamina: 80, mana: 0}},
      {id: 4, name: 'Syra', hands: {left: 0, right: 2}, params: {health: 90, stamina: 70, mana: 80}},
      {id: 6, name: 'Hissssa', hands: {left: 0, right: 1}, params: {health: 80, stamina: 60, mana: 70}},
      {id: 8, name: 'Elija', hands: {left: 0, right: 3}, params: {health: 70, stamina: 50, mana: 60}}
    ],
    activeChampionIndex: 2
  },
  mutations: {
    setActiveChampionIndex (state, {index}) {
      state.activeChampionIndex = index
    }
  },
  actions: {
    setActiveChampionIndex ({commit}, payload) {
      commit('setActiveChampionIndex', payload)
    }
  }
})
