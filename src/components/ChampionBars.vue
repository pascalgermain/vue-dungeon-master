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
import ChampionBar from './ChampionBar'

export default {
  name: 'champion-bars',
  components: {
    ChampionBar
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    params: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(18px);
$height: zoom(25px);

.champion-bars {
  left: zoom(46px);
  top: zoom(2px);
  width: $width;
  height: $height;
}
</style>
