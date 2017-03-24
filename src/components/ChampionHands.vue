<template>
  <div class="champion-hands">
    <champion-hand
      v-for="(item, side) of hands"
      :key="side"
      :side="side"
      :item="item"
    ></champion-hand>
  </div>
</template>

<script>
import ChampionHand from './ChampionHand'

export default {
  name: 'champion-hands',
  components: {
    ChampionHand
  },
  props: {
    hands: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(38px);
$height: zoom(18px);

.champion-hands {
  left: zoom(3px);
  top: zoom(9px);
  width: $width;
  height: $height;
}
</style>
