<template>
  <div class="champion-bars">
    <champion-bar
      v-for="(value, name) of params"
      :key="name"
      :index="index"
      :value="value"
    ></champion-bar>
  </div>
</template>

<script>
import {propTypes} from '@/utils'
import ChampionBar from './ChampionBar'

export default {
  name: 'champion-bars',
  components: {
    ChampionBar
  },
  props: {
    index: propTypes.required.Number,
    params: propTypes.required.Object
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

$width: zoom(18px);
$height: zoom(25px);

.champion-bars {
  left: zoom(46px);
  top: zoom(2px);
  width: $width;
  height: $height;
}
</style>
