import Vue from 'vue'
import Vuex from 'vuex'
import {champions} from '@/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    activeChampionIndex: 0
  },
  mutations: {
    addChampion (state, {index}) {
      state.champions.push(champions[index])
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
