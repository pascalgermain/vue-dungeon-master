<template>
  <div
    class="player"
    :style="style"
  ></div>
</template>

<script>
import {helpers, propTypes} from '@/utils'

export default {
  name: 'player',
  props: {
    position: propTypes.required.Object,
    rotation: propTypes.required.Number
  },
  computed: {
    style () {
      return {
        left: `${this.position.x * 28}px`,
        top: `${this.position.y * 28}px`,
        ...helpers.backgroundImage('champion-views'),
        ...helpers.transformRotate(this.rotation)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

$width: zoom(7px);
$height: zoom(7px);

.player {
  width: $width;
  height: $height;
  background-size: 100% 100%;
}
</style>
