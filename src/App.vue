<template>
  <div id="app">
    <champion-blocks></champion-blocks>
    <champion-views></champion-views>
    <dungeon></dungeon>
    <spells></spells>
    <attacks></attacks>
    <controls></controls>
    <messages></messages>
  </div>
</template>

<script>
import store from './store'
import ChampionBlocks from './components/ChampionBlocks'
import ChampionViews from './components/ChampionViews'
import Dungeon from './components/Dungeon'
import Spells from './components/Spells'
import Attacks from './components/Attacks'
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
    Attacks,
    Controls,
    Messages
  }
}
</script>

<style lang="scss" scoped>
@import './assets/styles/common.scss';

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
