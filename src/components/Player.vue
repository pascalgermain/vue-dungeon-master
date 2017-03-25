<template>
  <div
    class="player"
    :style="style"
  ></div>
</template>

<script>
import utils from '@/lib/utils'

export default {
  name: 'player',
  props: {
    position: {
      type: Object,
      required: true
    },
    rotation: {
      type: Number,
      required: true
    }
  },
  computed: {
    style () {
      const left = this.position.x * 28
      const top = this.position.y * 28
      const image = utils.image('champion-views')
      return {
        left: `${left}px`,
        top: `${top}px`,
        backgroundImage: `url(${image})`,
        transform: `rotate(${this.rotation * 90}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(7px);
$height: zoom(7px);

.player {
  width: $width;
  height: $height;
  background-size: 100% 100%;
}
</style>
