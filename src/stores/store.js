import Vue from 'vue'
import Vuex from 'vuex'
import constants from '@/constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    activeChampionIndex: 0
  },
  mutations: {
    addChampion (state, {id}) {
      state.champions.push(constants.champions.find((champion) => champion.id === id))
    },
    setActiveChampionIndex (state, {index}) {
      state.activeChampionIndex = index
    }
  },
  actions: {
    addChampion ({commit, state}, payload) {
      if (state.champions.length === 4) return
      commit('addChampion', payload)
    },
    setActiveChampionIndex ({commit}, payload) {
      commit('setActiveChampionIndex', payload)
    }
  }
})
