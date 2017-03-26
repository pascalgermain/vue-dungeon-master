<template>
  <div
    class="player"
    :style="style"
  ></div>
</template>

<script>
import {helpers} from '@/utils'

export default {
  name: 'player',
  computed: {
    style () {
      return {
        left: `${this.$store.state.position.x * 28}px`,
        top: `${this.$store.state.position.y * 28}px`,
        ...helpers.backgroundImage('map/player'),
        ...helpers.transformRotate(this.$store.state.rotation)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

.player {
  width: zoom(7px);
  height: zoom(7px);
  background-size: 100% 100%;
}
</style>
