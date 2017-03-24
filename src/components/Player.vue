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
      const left = (this.position.x * 64) + 2
      const top = (this.position.y * 64) + 2
      const image = utils.image('champion-views')
      return {
        left: `${left}px`,
        top: `${top}px`,
        backgroundImage: `url(${image})`,
        transform: `rotate(${this.rotation}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(15px);
$height: zoom(15px);

.player {
  width: $width;
  height: $height;
  margin-top: zoom(4px);
  background-size: 100% 100%;
}
</style>
