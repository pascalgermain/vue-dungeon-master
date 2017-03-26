import Vue from 'vue'
import Vuex from 'vuex'
import {levels, champions} from '@/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    levels,
    activeLevelIndex: 0,
    position: levels[0].position,
    rotation: levels[0].rotation,
    champions: [],
    activeChampionIndex: 0
  },
  mutations: {
    addChampion (state, {index}) {
      state.champions.push(champions[index])
    },
    setActiveChampionIndex (state, {index}) {
      state.activeChampionIndex = index
    },
    moveChampions (state, {move}) {
      const position = {x: state.position.x + move.x, y: state.position.y + move.y}
      const level = levels[state.activeLevelIndex]
      const xMax = level.cells[0].length - 1
      const yMax = level.cells.length - 1
      if (position.x < 0 || position.y < 0 || position.x > xMax || position.y > yMax) return
      const cell = level.cells[position.y][position.x]
      switch (cell) {
        case 0:
          return
        case 1:
        case 2:
          break
        default:
          // this.$store.dispatch('addChampion', {index: cell - 3}) // TODO move this somewhere else
          // this.cells[position.y][position.x] = 2 // TODO cells
      }
      state.position = position
    },
    rotateChampions (state, {rotation}) {
      state.rotation = rotation
    }
  },
  actions: {
    addChampion ({commit, state}, payload) {
      if (state.champions.length === 4) return
      commit('addChampion', payload)
    },
    setActiveChampionIndex ({commit}, payload) {
      commit('setActiveChampionIndex', payload)
    },
    moveChampions ({commit}, payload) {
      commit('moveChampions', payload)
    },
    rotateChampions ({commit}, payload) {
      commit('rotateChampions', payload)
    }
  }
})
