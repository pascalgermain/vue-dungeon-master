<template>
  <div id="app">
    <champion-blocks></champion-blocks>
    <champion-views></champion-views>
    <dungeon
      :position="position"
      :rotation="rotation"
      :cells="cells"
      :wallItems="items.wall"
    ></dungeon>
    <spells></spells>
    <items></items>
    <controls
      :position="position"
      :rotation="rotation"
      @move="move($event)"
      @rotate="rotate($event)"
    ></controls>
    <messages></messages>
  </div>
</template>

<script>
import data from '@/data/data'
import store from '@/stores/store'
import ChampionBlocks from './components/ChampionBlocks'
import ChampionViews from './components/ChampionViews'
import Dungeon from './components/Dungeon'
import Spells from './components/Spells'
import Items from './components/Items'
import Controls from './components/Controls'
import Messages from './components/Messages'

export default {
  name: 'app',
  store,
  components: {
    ChampionBlocks,
    ChampionViews,
    Dungeon,
    Spells,
    Items,
    Controls,
    Messages
  },
  data () {
    return data.level
  },
  methods: {
    move (position) {
      const xMax = this.cells[0].length - 1
      const yMax = this.cells.length - 1
      if (position.x < 0 || position.y < 0 || position.x > xMax || position.y > yMax) return
      const cell = this.cells[position.y][position.x]
      switch (cell) {
        case 0:
          return
        case 1:
        case 2:
          break
        default:
          this.$store.dispatch('addChampion', {index: cell - 3})
          this.cells[position.y][position.x] = 2
      }
      this.position = position
    },
    rotate (rotation) {
      this.rotation = rotation
    }
  }
}
</script>

<style lang="scss" scoped>
@import './theme/_variables.scss';

$width: zoom(320px);
$height: zoom(200px);

#app {
  left: 50%;
  top: 50%;
  width: $width;
  height: $height;
  margin-left: -($width / 2);
  margin-top: -($height / 2);
}
</style>
