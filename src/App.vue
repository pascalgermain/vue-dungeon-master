<template>
  <div id="app">
    <champion-blocks></champion-blocks>
    <champion-views></champion-views>
    <dungeon
      :cells="cells"
      :position="position"
      :rotation="rotation"
    ></dungeon>
    <spells></spells>
    <items></items>
    <controls
      @position="move($event)"
      @rotation="rotate($event)"
    ></controls>
    <messages></messages>
  </div>
</template>

<script>
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
    return {
      cells: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ],
      position: {x: 5, y: 5},
      rotation: 0
    }
  },
  methods: {
    move (position) {
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
